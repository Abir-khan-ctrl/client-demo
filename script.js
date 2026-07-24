// EDIT THESE VALUES if the cafe's contact details change.
const CONTACT = {
  phone: "+918383826717",
  // Replace this with the cafe's confirmed email address before publishing.
  email: "hello@marvellascafe.com"
};

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#email-link').href = `mailto:${CONTACT.email}`;

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
