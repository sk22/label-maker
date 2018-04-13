const label = footer => ([ id, model, user, location, updated ]) => `
  <div class="label">
    <main class="main">
      <p class="number">${id}</p>
        <div class="row">
          <i class="row__icon material-icons">devices_other</i>
          <span class="row__content">${model}</span>
        </div>
      <div class="row">
        <i class="row__icon material-icons">person</i>
        <span class="row__content">${user}</span>
      </div>
      <div class="row">
        <i class="row__icon material-icons">place</i>
        <span class="row__content">${location}</span>
      </div>
    </main>
    <footer class="footer">
      <span class="footer__credit">${footer}</span>
      <i class="material-icons footer__icon">autorenew</i>
      &nbsp;${updated}
    </footer>
  </div>
`;

const generate = (value, template) =>
  value.trim()
    .split('\n')
    .map(t => t.split('\t'))
    .map(template)
    .join('');

(() => {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const footer = document.getElementById('footer');

  const update = () =>
    output.innerHTML = generate(input.value, label(footer.value));
  input.addEventListener('input', update);
  footer.addEventListener('input', update);
})();
