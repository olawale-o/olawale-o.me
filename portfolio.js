const main = document.querySelector('main');
const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const portfolio = document.querySelector('#portfolio');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const projectList = document.querySelector('#projects');

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
    sourceLink:'https://github.com/olawale-o/portfolio-mobile-version',
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
    sourceLink:'https://github.com/olawale-o/portfolio-mobile-version',
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
    sourceLink:'https://github.com/olawale-o/portfolio-mobile-version',
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
    sourceLink:'https://github.com/olawale-o/portfolio-mobile-version',
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
            <li class="proficiency">CANOPY</li>
            <li class="dot"></li>
            <li class="role">Back End Dev</li>
            <li class="dot"></li>
            <li class="year">2015</li>
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
