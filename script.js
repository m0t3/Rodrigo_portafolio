// --- Cambio de pestañas en la tarjeta de código ---
const tabs = document.querySelectorAll('.code-tabs span');
const codeBody = document.querySelector('.code-body pre');
const lineNumbers = document.querySelector('.line-numbers');

const snippets = {
  'my-information.js': `<span class="tok-kw">export default</span> {
    <span class="tok-prop">name</span>: <span class="tok-str">'Alex Rivera'</span>,
    <span class="tok-prop">age</span>: <span class="tok-num">27</span>,
    <span class="tok-prop">contactEmail</span>: <span class="tok-str">'alex@example.com'</span>,
    <span class="tok-prop">experience</span>: <span class="tok-str">'Programando desde hace +6 años'</span>,
}`,
  'package.json': `{
  <span class="tok-str">"name"</span>: <span class="tok-str">"portfolio"</span>,
  <span class="tok-str">"version"</span>: <span class="tok-str">"1.0.0"</span>,
  <span class="tok-str">"license"</span>: <span class="tok-str">"MIT"</span>
}`
};

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const key = tab.textContent.trim();
    const code = snippets[key] || '';
    codeBody.innerHTML = code;

    const lines = code.split('\n').length;
    lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) =>
      `<div>${String(i + 1).padStart(2, '0')}</div>`
    ).join('');
  });
});

// --- Resaltar el enlace activo del menú según la sección visible ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

const highlightNav = () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', highlightNav);
highlightNav();
