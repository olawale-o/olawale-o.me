const main = document.querySelector('main');
const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const portfolio = document.querySelector('#portfolio');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const projectList = document.querySelector('#projects');

const createSkillList = (project, role, year) => (
  `<li class="proficiency">${project}</li>
  <li class="dot"></li>
  <li class="role">${role}</li>
  <li class="dot"></li>
  <li class="year">${year}</li>`
);

const selectors = [hamburger, close, portfolio, about, contact];

for (let i = 0; i < selectors.length; i += 1) {
  selectors[i].addEventListener('click', () => {
    main.classList.toggle('active');
  });
}

const projects = [
  {
    projectId: 'projectOne',
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    featuredImage: 'assets/portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
    skillList: createSkillList('CANNOPY', 'Back End Dev', 2015),
  },

  {
    projectId: 'projectTwo',
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    featuredImage: 'assets/Snapshoot-Portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
    skillList: createSkillList('CANNOPY', 'Back End Dev', 2015),
  },

  {
    projectId: 'projectThree',
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    featuredImage: 'assets/posts.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
    skillList: createSkillList('CANNOPY', 'Back End Dev', 2015),
  },

  {
    projectId: 'projectFour',
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    featuredImage: 'assets/stories.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
    skillList: createSkillList('CANNOPY', 'Back End Dev', 2015),
  },
];

function createProject(project, position) {
  let left = '';
  let right = '';
  if (position % 2 === 0) {
    left = 'order-1';
    right = 'order-2';
  } else {
    left = 'order-2';
    right = 'order-1';
  }
  const techItem = `
  <li>
    <section class="post-section">
      <div class="post-container">
          <div class="left ${left}">
              <img class="image sm"  src="${project.featuredImage}" alt="portfolio" />
          </div>
          <div class="right ${right}">
            <h4 class="title">${project.name}</h4>
            <ul class="skills">
            ${project.skillList}
            </ul>
            <p class="text">
              ${project.description}
            </p>
            <ul class="tags" id="tags">
              ${project.technologies.map((tech) => `<li class="tag">${tech}</li>`).join('')}
            </ul>
            <button class="btn-project" id="${project.projectId}">See Project</button>
          </div>
      </div>
    </section>
  </li>
  `;
  return techItem;
}

for (let i = 0; i < projects.length; i += 1) {
  const project = createProject(projects[i], i);
  projectList.innerHTML += project;
}

const body = document.querySelector('body');
const closeModal = document.querySelector('#closeModal');
const modalTitle = document.querySelector('#modal-title');
const modalText = document.querySelector('#modal-text');
const modalImage = document.querySelector('#modal-image');
const image = document.createElement('img');
const modalTags = document.querySelector('#modal-tags');
const modalSkills = document.querySelector('#modal-skills');
const liveLink = document.querySelector('#live-link');
const sourceLink = document.querySelector('#source-link');

function toggleModal(project = null) {
  if (body.style.overflow === '') {
    body.style.overflow = 'hidden';
    modalSkills.innerHTML = project.skillList;
    modalTitle.textContent = project.name;
    modalText.textContent = project.description;
    image.setAttribute('src', project.featuredImage);
    image.setAttribute('alt', project.projectId);
    image.setAttribute('class', 'image');
    image.setAttribute('id', 'image');
    modalImage.appendChild(image);
    for (let i = 0; i < project.technologies.length; i += 1) {
      const tag = document.createElement('li');
      tag.setAttribute('class', 'tag');
      tag.textContent = project.technologies[i];
      modalTags.appendChild(tag);
    }
    liveLink.href = project.liveLink;
    sourceLink.href = project.sourceLink;
  } else {
    body.style.overflow = '';
    modalSkills.innerHTML = '';
    modalTitle.textContent = '';
    modalText.textContent = '';
    image.parentNode.removeChild(image);
    while (modalTags.firstChild) {
      modalTags.removeChild(modalTags.firstChild);
    }
    liveLink.href = '#';
    sourceLink.href = '#';
  }
  main.classList.toggle('open-modal');
}

for (let i = 0; i < projects.length; i += 1) {
  const project = document.querySelector(`#${projects[i].projectId}`);
  project.addEventListener('click', () => {
    toggleModal(projects[i]);
  });
}

closeModal.addEventListener('click', () => {
  toggleModal();
});

const error = document.querySelector('#error');
const form = document.querySelector('#contact-form');
const fullName = document.querySelector('#full-name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

const contactKey = 'CONTACT';
window.onload = () => {
  const contactDetails = localStorage.getItem(contactKey);
  if (contactDetails) {
    const contact = JSON.parse(contactDetails);
    fullName.value = contact.fullName;
    email.value = contact.email;
    message.value = contact.message;
  }
};

form.addEventListener('submit', (event) => {
  if (email.value.trim() !== email.value.trim().toLowerCase()) {
    error.style.opacity = 1;
    error.textContent = 'Please ensure email is in lower case';
    event.preventDefault();
  } else if (fullName.value.trim() !== fullName.value.trim().toLowerCase()) {
    error.style.opacity = 1;
    error.textContent = 'Please ensure name is in lower case';
    event.preventDefault();
  } else {
    const contactObj = {
      fullName: fullName.value,
      email: email.value,
      message: message.value,
    };
    localStorage.setItem(contactKey, JSON.stringify(contactObj));
    error.style.opacity = 0;
  }
});