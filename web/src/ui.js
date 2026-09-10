// Joint sliders + simulation controls (pause/resume, reset). Pure DOM, no framework.

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
 * @param {() => void} opts.onReset - called after ctrl is zeroed and mj_resetData should run
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
  onReset,
  onTogglePause,
}) {
  const sliders = [];

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

  let paused = false;
  pauseBtn.addEventListener("click", () => {
    paused = !paused;
    pauseBtn.textContent = paused ? "Resume" : "Pause";
    onTogglePause(paused);
  });

  resetBtn.addEventListener("click", () => {
    for (let i = 0; i < model.nu; i++) data.ctrl[i] = 0;
    onReset();
    syncSlidersFromCtrl();
  });

  function setStatus(text) {
    statusLineEl.textContent = text;
  }

  return { syncSlidersFromCtrl, setStatus };
}
