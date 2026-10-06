/* Standalone test countdown — deliberately independent of Nexus game state. */
(() => {
  const button = document.querySelector('#countdownButton');
  const popup = document.querySelector('#countdownPopup');
  const counter = document.querySelector('#countdownValue');
  const status = document.querySelector('#countdownStatus');
  let interval;

  button.addEventListener('click', () => {
    clearInterval(interval);
    const deadline = performance.now() + 30000;
    counter.textContent = '30';
    status.textContent = 'Seconds remaining';
    popup.showModal();

    interval = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((deadline - performance.now()) / 1000));
      counter.textContent = String(remaining);
      if (remaining === 0) {
        clearInterval(interval);
        status.textContent = "Time’s up!";
      }
    }, 100);
  });

  document.querySelector('#countdownClose').addEventListener('click', () => popup.close());
  popup.addEventListener('close', () => {
    clearInterval(interval);
    button.focus();
  });
})();
