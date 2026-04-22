// --- Data Arrays --- //

const projectsData = [
  {
    title: "Travel Itinerary Planner",
    description: "A customizable itinerary tracker and my first full front-end project! Built specifically to learn the fundamentals of HTML, CSS, and state-driven vanilla JavaScript. Includes backend systems, AI/API integration.",
    technologies: ["JavaScript", "HTML/CSS", "Mapping Data", "AI Integration", "S.P.A."],
    link: "https://github.com/Oapatel2303/travel-planner",
    liveLink: "https://opaz-travelplanner.netlify.app/"
  },
  {
    title: "Future Project",
    description: "Information about another project will go right here once it's ready to be showcased.",
    technologies: ["Vanilla JS"],
    link: "https://github.com/Oapatel2303"
  }
];

const booksData = [
  "One Piece by Eiichiro Oda",
  "A Song of Ice and Fire / Game of Thrones by George R.R. Martin",
  "Harry Potter by J.K. Rowling"
];

const hobbiesData = [
  "Playing Basketball & Volleyball",
  "Cooking & Recipe Adaptation",
  "Automotive Culture & Motorcycles (checking out auto expos)"
];

const skillsData = [
  { 
    category: "Languages", 
    items: ["Java", "JavaScript", "C++", "HTML/CSS", "Lua"] 
  },
  { 
    category: "Tools & Technologies", 
    items: ["Git/GitHub", "DOM Manipulation", "REST APIs", "Markdown"] 
  },
  { 
    category: "Concepts", 
    items: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Version Control"] 
  }
];

// --- Rendering Functions --- //

function renderProjects() {
  const container = document.getElementById('projects-container');
  projectsData.forEach(project => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const tags = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    // Check if liveLink exists to render a second button
    const liveLinkHTML = project.liveLink 
      ? `<a href="${project.liveLink}" target="_blank" style="color: var(--accent-color); text-decoration: none; font-weight: 600;">Live Site &rarr;</a>` 
      : '';
    
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div style="margin-bottom: 1.5rem;">${tags}</div>
      <div style="display: flex; gap: 1.5rem;">
        <a href="${project.link}" target="_blank" style="color: var(--accent-color); text-decoration: none; font-weight: 600;">View Code &rarr;</a>
        ${liveLinkHTML}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderList(dataArray, containerId) {
  const container = document.getElementById(containerId);
  dataArray.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  
  skillsData.forEach(skillGroup => {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'skill-group';
    
    const tagsHTML = skillGroup.items.map(item => `<span class="skill-tag">${item}</span>`).join('');
    
    groupDiv.innerHTML = `
      <h3>${skillGroup.category}</h3>
      <div class="skill-tags">
        ${tagsHTML}
      </div>
    `;
    
    container.appendChild(groupDiv);
  });
}

// --- Theme Toggle Logic --- //

const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
  themeToggleBtn.textContent = '☀️ Light Mode';
}

themeToggleBtn.addEventListener('click', () => {
  if (document.body.getAttribute('data-theme') === 'dark') {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    themeToggleBtn.textContent = '🌙 Dark Mode';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggleBtn.textContent = '☀️ Light Mode';
  }
});

// --- Scroll Progress Bar Logic --- //
window.addEventListener('scroll', () => {
  const scrollTracker = document.getElementById('scroll-progress');
  
  // Calculate total scrollable height
  const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  // Get current scroll position
  const currentScroll = document.documentElement.scrollTop;
  
  // Calculate percentage and apply it to the HEIGHT
  const scrollPercentage = (currentScroll / scrollTotal) * 100;
  scrollTracker.style.height = `${scrollPercentage}%`; 
});


// --- Initialize --- //

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  renderList(booksData, 'books-container');
  renderList(hobbiesData, 'hobbies-container');
});
