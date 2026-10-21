(() => {
  const printButton = document.querySelector('#print-cv');

  if (!printButton) return;

  printButton.addEventListener('click', () => window.print());
})();
