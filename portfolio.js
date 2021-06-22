const main = document.querySelector('main');
const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const portfolio = document.querySelector('#portfolio');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

const selectors = [hamburger, close, portfolio, about, contact];

for (let i = 0; i < selectors.length; i += 1) {
  selectors[i].addEventListener('click', () => {
    main.classList.toggle('active');
  });
}
