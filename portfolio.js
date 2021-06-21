const main = document.querySelector('main');
const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const portfolio = document.querySelector('#portfolio');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

hamburger.addEventListener('click', () => {
  main.classList.add('active');
});

close.addEventListener('click', () => {
  main.classList.remove('active');
});

portfolio.addEventListener('click', () => {
  main.classList.toggle('active');
});

about.addEventListener('click', () => {
  main.classList.toggle('active');
});

contact.addEventListener('click', () => {
  main.classList.toggle('active');
});
