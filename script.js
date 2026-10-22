const planets = {
  earth: {
    name: 'Earth',
    description:
      'Earth is the only known planet with liquid water on the surface and life as we know it.',
    distance: '149.6 million km',
    day: '24 hours',
    fun: 'Home to humans',
  },
  mars: {
    name: 'Mars',
    description:
      'Mars, the red planet, is a cold desert world with giant volcanoes and canyons.',
    distance: '227.9 million km',
    day: '24.6 hours',
    fun: 'Home to Olympus Mons',
  },
  jupiter: {
    name: 'Jupiter',
    description:
      'Jupiter is the largest planet in our solar system and is famous for its stormy stripes and Great Red Spot.',
    distance: '778.5 million km',
    day: '9.9 hours',
    fun: 'A giant gas world',
  },
};

const nameEl = document.getElementById('planet-name');
const descriptionEl = document.getElementById('planet-description');
const distanceEl = document.getElementById('fact-distance');
const dayEl = document.getElementById('fact-day');
const funEl = document.getElementById('fact-fun');
const navButtons = document.querySelectorAll('.nav-btn');
const planetsVisual = document.querySelectorAll('.planet');

function setPlanet(key) {
  const planet = planets[key];
  if (!planet) return;

  nameEl.textContent = planet.name;
  descriptionEl.textContent = planet.description;
  distanceEl.textContent = planet.distance;
  dayEl.textContent = planet.day;
  funEl.textContent = planet.fun;

  navButtons.forEach((button) => {
    const isActive = button.dataset.target === key;
    button.classList.toggle('active', isActive);
  });

  planetsVisual.forEach((item) => {
    const isActive = item.id === `planet-${key}`;
    item.classList.toggle('active', isActive);
  });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => setPlanet(button.dataset.target));
});

setPlanet('earth');
