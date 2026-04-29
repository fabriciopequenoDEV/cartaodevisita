(function () {
  const levels = ['compact', 'base', 'large', 'xlarge'];
  const storageKey = 'smd-font-scale';
  const root = document.documentElement;
  const defaultLevel = root.dataset.smdDefaultFont || 'base';

  function normalizedLevel(value) {
    return levels.includes(value) ? value : defaultLevel;
  }

  function currentIndex() {
    return levels.indexOf(normalizedLevel(root.dataset.smdFontScale));
  }

  function applyLevel(level, persist) {
    const next = normalizedLevel(level);
    root.dataset.smdFontScale = next;
    if (persist) {
      localStorage.setItem(storageKey, next);
    }
    updateState();
  }

  function updateState() {
    const controls = document.querySelector('[data-smd-font-controls]');
    if (!controls) return;

    const index = currentIndex();
    controls.querySelector('[data-font-action="decrease"]').disabled = index <= 0;
    controls.querySelector('[data-font-action="increase"]').disabled = index >= levels.length - 1;
  }

  function buildControls() {
    const controls = document.createElement('div');
    controls.className = 'smd-font-controls';
    controls.dataset.smdFontControls = 'true';
    controls.setAttribute('aria-label', 'Controle de tamanho da fonte');
    controls.innerHTML = [
      '<button type="button" data-font-action="decrease" aria-label="Diminuir fonte">A-</button>',
      '<button type="button" class="smd-font-reset" data-font-action="reset" aria-label="Restaurar fonte">A</button>',
      '<button type="button" data-font-action="increase" aria-label="Aumentar fonte">A+</button>'
    ].join('');

    controls.addEventListener('click', function (event) {
      const button = event.target.closest('[data-font-action]');
      if (!button) return;

      const action = button.dataset.fontAction;
      const index = currentIndex();
      if (action === 'increase') applyLevel(levels[Math.min(levels.length - 1, index + 1)], true);
      if (action === 'decrease') applyLevel(levels[Math.max(0, index - 1)], true);
      if (action === 'reset') applyLevel(defaultLevel, true);
    });

    document.body.appendChild(controls);
  }

  const savedLevel = localStorage.getItem(storageKey);
  applyLevel(savedLevel || defaultLevel, false);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildControls);
  } else {
    buildControls();
  }
})();
