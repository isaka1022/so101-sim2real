// Joint sliders + simulation and policy controls. Pure DOM, no framework.

function actuatorName(mujoco, model, index) {
  const OBJ_ACTUATOR = mujoco.mjtObj.mjOBJ_ACTUATOR.value;
  const name = mujoco.mj_id2name(model, OBJ_ACTUATOR, index);
  return name && name.length > 0 ? name : `actuator_${index}`;
}

function ctrlRange(model, index) {
  const min = model.actuator_ctrlrange[index * 2];
  const max = model.actuator_ctrlrange[index * 2 + 1];
  if (Number.isFinite(min) && Number.isFinite(max) && max > min) return [min, max];
  return [-3.14159, 3.14159];
}

/**
 * @param {object} opts
 * @param {object} opts.mujoco - loaded MuJoCo module
 * @param {object} opts.model - MjModel
 * @param {object} opts.data - MjData (data.ctrl is written to directly)
 * @param {HTMLElement} opts.jointListEl - container for slider rows
 * @param {HTMLElement} opts.pauseBtn
 * @param {HTMLElement} opts.resetBtn
 * @param {HTMLElement} opts.statusLineEl
 * @param {HTMLSelectElement} opts.policySelectEl
 * @param {HTMLElement} opts.randomizeBtn
 * @param {() => void} opts.onReset - resets the scene (arm home + block)
 * @param {() => void} opts.onRandomizeBlock
 * @param {(entry: object | null) => void} opts.onSelectPolicy - null means slider control
 * @param {(paused: boolean) => void} opts.onTogglePause
 */
export function createControlPanel({
  mujoco,
  model,
  data,
  jointListEl,
  pauseBtn,
  resetBtn,
  statusLineEl,
  policySelectEl,
  randomizeBtn,
  onReset,
  onRandomizeBlock,
  onSelectPolicy,
  onTogglePause,
}) {
  const sliders = [];
  let policyEntries = [];

  for (let i = 0; i < model.nu; i++) {
    const name = actuatorName(mujoco, model, i);
    const [min, max] = ctrlRange(model, i);

    const row = document.createElement("div");
    row.className = "joint-row";

    const label = document.createElement("label");
    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;
    const valueSpan = document.createElement("span");
    valueSpan.className = "joint-value";
    label.append(nameSpan, valueSpan);

    const input = document.createElement("input");
    input.type = "range";
    input.min = String(min);
    input.max = String(max);
    input.step = String((max - min) / 1000);
    input.value = String(data.ctrl[i] || 0);

    const format = (v) => Number(v).toFixed(2);
    valueSpan.textContent = format(input.value);

    input.addEventListener("input", () => {
      const v = parseFloat(input.value);
      data.ctrl[i] = v;
      valueSpan.textContent = format(v);
    });

    row.append(label, input);
    jointListEl.appendChild(row);
    sliders.push({ input, valueSpan, format });
  }

  function syncSlidersFromCtrl() {
    for (let i = 0; i < sliders.length; i++) {
      const v = data.ctrl[i] || 0;
      sliders[i].input.value = String(v);
      sliders[i].valueSpan.textContent = sliders[i].format(v);
    }
  }

  function setSlidersEnabled(enabled) {
    for (const slider of sliders) slider.input.disabled = !enabled;
    jointListEl.classList.toggle("disabled", !enabled);
  }

  /** Populate the policy selector; entries come from the policy manifest. */
  function setPolicies(entries) {
    policyEntries = entries;
    for (const [index, entry] of entries.entries()) {
      const option = document.createElement("option");
      option.value = String(index);
      const rate = entry.success_rate;
      option.textContent =
        rate === undefined ? entry.name : `${entry.name} — ${(rate * 100).toFixed(0)}% success`;
      policySelectEl.appendChild(option);
    }
    policySelectEl.disabled = entries.length === 0;
  }

  policySelectEl.addEventListener("change", () => {
    const index = Number(policySelectEl.value);
    onSelectPolicy(Number.isNaN(index) || index < 0 ? null : policyEntries[index]);
  });

  randomizeBtn.addEventListener("click", () => {
    onRandomizeBlock();
    syncSlidersFromCtrl();
  });

  let paused = false;
  pauseBtn.addEventListener("click", () => {
    paused = !paused;
    pauseBtn.textContent = paused ? "Resume" : "Pause";
    onTogglePause(paused);
  });

  resetBtn.addEventListener("click", () => {
    onReset();
    syncSlidersFromCtrl();
  });

  function setStatus(text) {
    statusLineEl.textContent = text;
  }

  function clearPolicySelection() {
    policySelectEl.value = "-1";
  }

  return { syncSlidersFromCtrl, setSlidersEnabled, setPolicies, clearPolicySelection, setStatus };
}
