const NAV_ITEMS = [
  "Option1", "Option2", "Option3", "Option4", "Option5",
  "Option6", "Option7", "Option8", "Option9", "Option10"
];

const navList = document.querySelector('.nav-list');

// Create or select the display area for the message
let displayArea = document.getElementById('display-area');
if (!displayArea) {
  displayArea = document.createElement('div');
  displayArea.id = 'display-area';
  displayArea.style.margin = '2rem auto';
  displayArea.style.textAlign = 'center';
  displayArea.style.fontSize = '1.5rem';
  document.body.appendChild(displayArea);
}

displayArea.textContent = '';

function renderNavItems(items) {
  navList.innerHTML = '';
  items.forEach((item, idx) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.className = 'nav-link';
    a.textContent = item;
    a.setAttribute('tabindex', '0');

    a.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      a.classList.add('active');
      displayArea.textContent = `you clicked ${item}`;
    });
    li.appendChild(a);
    navList.appendChild(li);
  });
}
renderNavItems(NAV_ITEMS);

// Keyboard navigation
navList.addEventListener('keydown', (e) => {
  const links = Array.from(navList.querySelectorAll('.nav-link'));
  const active = document.activeElement;
  let idx = links.indexOf(active);
  if (e.key === 'ArrowRight') {
    e.preventDefault();
    const next = links[idx + 1] || links[0];
    next.focus();
    navList.scrollBy({left: next.offsetLeft - navList.scrollLeft - 40, behavior: 'smooth'});
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    const prev = links[idx - 1] || links[links.length - 1];
    prev.focus();
    navList.scrollBy({left: prev.offsetLeft - navList.scrollLeft - 40, behavior: 'smooth'});
  }
});

// Touch/mouse/scroll indicator logic
const leftIndicator = document.querySelector('.scroll-indicator.left');
const rightIndicator = document.querySelector('.scroll-indicator.right');
function updateIndicators() {
  const { scrollLeft, scrollWidth, clientWidth } = navList;
  leftIndicator.style.opacity = scrollLeft > 5 ? '1' : '0';
  rightIndicator.style.opacity = (scrollLeft + clientWidth < scrollWidth - 5) ? '1' : '0';
}
navList.addEventListener('scroll', updateIndicators);
window.addEventListener('resize', updateIndicators);
setTimeout(updateIndicators, 100);

// Accessibility: ARIA roles
navList.setAttribute('role', 'list');
navList.querySelectorAll('li').forEach(li => li.setAttribute('role', 'listitem'));
