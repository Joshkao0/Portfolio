const projectCategories = {
  "ESP-Projekte": [
    {
      title: "Space Invaders - aktualisierter Bau",
      description: "Space Invaders mit OLED-Display und Potentiometer aktualisierter.",
      specs: ["2x Steckbrett", "1x ESP32", "0.96\" I2C OLED", "1x Buzzer", "1x Potentiometer"],
      date: "Mai 2025",
      image: "img/space_invaders_neu1.jpg",
    },
    {
      title: "RC-Car mit WiFi (abgebrochen)", 
      description: "Ein ferngesteuertes Auto über WLAN.",
      specs: ["1x ESP8266", "4x DC-Motoren", "1x L298N", "App-gesteuert"],
      date: "Juni 2025",
      image: "img/rc_car1.jpg",
      image2: "img/rc_car2.jpg",
      image3: "img/rc_car3.jpg"
    },
    {
      title: "Flappybird",
      description: "Ähnlich wie Space Invaders ein Fun-Spielzeug für zwischendurch.",
      specs: ["1x ESP32","1x Steckbrett","0.96\" I2C OLED","1x Button"],
      date: "1.8.2025",
      image: "img/Flappybird1.jpg",
      image2: "img/Flappybird2.jpg",
      image3: "img/Videos/Flappybird3.mp4",
      videoThumbnail: "img/Thumbnail/Flappybird3-thumb.jpg"
    }
  ],
  "Arduino UNO R3 Projekte": [
    {
      title: "LED-Roulette",
      description: "5 LEDs mit Zufallswurf.",
      specs: ["1x Steckbrett", "5x LED","5x 220Ω Widerstand"],
      date: "18.5.2025",
      image: "img/led-roulette1.jpg",
      image2: "img/led-roulette2.jpg",
      image3: "img/Videos/led-roulette3.mp4",
      videoThumbnail: "img/Thumbnail/led-roulette3.jpg"
    },
    {
      title: "Space Invaders - alte Version",
      description: "Space Invaders mit OLED-Display und Potentiometer. Alte Version hier ohne, weil mein Potentiometer kaputt ging :(",
      specs: ["1x Steckbrett", "1x Arduino UNO R3", "0.96\" SPI OLED", "1x Potentiometer"],
      date: "Mai 2025",
      image: "img/space_invaders_alt1.jpg",
    },
    {
      title: "Licht mit Servo steuern",
      description: "Ein kleiner test ob die Servos funktionieren.",
      specs: ["1x Servo Motor","xy Jumper Kabel"],
      date: "30.8.2025",
      image: "img/Servo1.jpg",
      image2: "img/Servo2.jpg",
      image3: "img/VideosServo/Fan3.mp4",
      videoThumbnail: "img/Thumbnail/Sero3.jpg"
    },
  ],
  "Nur mit Strom/Steckbrett": [
    {
      title: "Lichtschaltung",
      description: "Eine LED wird per Knopfdruck ausgeschaltet. Lässt man den Knopf los, geht die andere LED an.",
      specs: ["1x Steckbrett", "2x LED","1x Knopf", "1x 220Ω Widerstand"],
      date: "16.4.2025",
      image: "img/lichtpoten1.jpg",
      image2: "img/lichtpoten2.jpg",
    },
    {
      title: "LED-Helligkeit",
      description: "Eine einfache Lichtsteuerung mit einem Potentiometer.",
      specs: ["1x Steckbrett","1x LED", "1x Potentiometer", "1x 220Ω Widerstand"],
      date: "16.4.2025",
      image: "img/led-helligkeit1.jpg",
      image2: "img/led-helligkeit2.jpg",
    },
    {
      title: "Buzzer Peep",
      description: "Ein Buzzer piept, bis ein Knopf gedrückt wird. Lässt man ihn los, piept er weiter.",
      specs: ["1x Steckbrett", "1x LED","1x 220Ω Widerstand", "1x Button", "1x Aktiver Buzzer"],
      date: "16.4.2025",
      image: "img/buzzer peep1.jpg",
    },
    {
      title: "Stolperfalle",
      description: "Stolperfalle ohne das Stolpern halt.",
      specs: ["1x Steckbrett", "1x LED", "1x 10KΩ Widerstand", "1x BC547 Transistor", "1x LDR", "1x Buzzer", "1x Laser"],
      date: "1.8.2025",
      image: "img/Stolerfalle1.jpg",
      image2: "img/Stolerfalle2.jpg",
    },
    {
      title: "Fan zu abkühlen",
      description: "Ein kleiner Lüfter der jemanden schön abkühlen kann mit ca. 60dB.",
      specs: ["1x Steckbrett", "Handvoll mit Jumper-Kabeln", "1x DC Motor", "1x Potentiometer"],
      date: "4.8.2025",
      image: "img/Fan1.jpg",
      image2: "img/Fan2.jpg",
      image3: "img/Videos/Fan3.mp4",
      videoThumbnail: "img/Thumbnail/Fan2.jpg"
    },
  ],
  "Modding": [
    {
      title: "3DS Modding",
      description: "Modifizierter Nintendo 3DS mit neuer Software. Mehr Hilfe bei https://3ds.hacks.guide/",
      specs: ["Nintendo 3DS", "Homebrew Launcher", "Micro SD Karte Min 32GB"],
      date: "2025",
      image: "img/3ds_mod1.jpg",
    },
    {
      title: "Samsung S6 Edge Modding",
      description: "Modifizierter Samsung S6 Edge mit neuer Software.(Unoffical Custom ROM LineageOS Andorid 11 mit Gapps) OEM entsperrt. Bootloader entsperrt. Odin ist Benötigt.",
      specs: ["Samsung S6 Edge", "Custom ROM", "Micro SD Karte Min 8GB"],
      date: "23.12.2025",
      image: "img/s6_edge_mod1.jpg",
    },
    {
      title: "Samsung J5  Modding",
      description: "Modifizierter Samsung J5 mit neuer Software.(Unoffical Custom ROM LineageOS Andorid 11 mit Gapps) OEM entsperrt. Bootloader entsperrt. Odin ist Benötigt.",
      specs: ["Samsung J5", "Custom ROM", "Micro SD Karte Min 8GB"],
      date: "20.12.2025",
      image: "img/j5_mod1.jpg"
    },
    {
      title: "Samsung Galaxy 5 Tab   Modding",
      description: "Modifizierter Samsung Galaxy 5 Tab mit neuer Software.(Unoffical Custom ROM LineageOS Andorid 10 mit Gapps) OEM entsperrt. Bootloader entsperrt. Odin ist Benötigt.",
      specs: ["Samsung Galaxy 5 Tab", "Custom ROM", "Micro SD Karte Min 8GB"],
      date: "20.12.2025",
      image: "img/Tab_5mod1.jpg"
    },
  ]
};

const projectsDiv = document.getElementById('projects');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const searchInput = document.getElementById('searchInput');

let currentLanguage = 'de';

const translations = {
  // Category names
  "ESP-Projekte": { en: "ESP Projects" },
  "Arduino UNO R3 Projekte": { en: "Arduino UNO R3 Projects" },
  "Nur mit Strom/Steckbrett": { en: "Power/Breadboard Only" },
  "Modding": { en: "Modding" },
  // Project titles and descriptions
  "Space Invaders - aktualisierter Bau": { en: "Space Invaders - Updated Build" },
  "Space Invaders mit OLED-Display und Potentiometer aktualisierter.": { en: "Space Invaders with OLED display and updated potentiometer." },
  "RC-Car mit WiFi (abgebrochen)": { en: "RC Car with WiFi (Discontinued)" },
  "Ein ferngesteuertes Auto über WLAN.": { en: "A remote controlled car via WiFi." },
  "Flappybird": { en: "Flappybird" },
  "Ähnlich wie Space Invaders ein Fun-Spielzeug für zwischendurch.": { en: "Similar to Space Invaders, a fun toy to play with." },
  "LED-Roulette": { en: "LED Roulette" },
  "5 LEDs mit Zufallswurf.": { en: "5 LEDs with random selection." },
  "Space Invaders - alte Version": { en: "Space Invaders - Old Version" },
  "Space Invaders mit OLED-Display und Potentiometer. Alte Version hier ohne, weil mein Potentiometer kaputt ging :(": { en: "Space Invaders with OLED display and potentiometer. Old version without it because my potentiometer broke :(" },
  "Licht mit Servo steuern": { en: "Control Light with Servo" },
  "Ein kleiner test ob die Servos funktionieren.": { en: "A small test to see if the servos work." },
  "Lichtschaltung": { en: "Light Switch" },
  "Eine LED wird per Knopfdruck ausgeschaltet. Lässt man den Knopf los, geht die andere LED an.": { en: "One LED turns off when a button is pressed. Release the button and another LED turns on." },
  "LED-Helligkeit": { en: "LED Brightness" },
  "Eine einfache Lichtsteuerung mit einem Potentiometer.": { en: "Simple light control with a potentiometer." },
  "Buzzer Peep": { en: "Buzzer Beep" },
  "Ein Buzzer piept, bis ein Knopf gedrückt wird. Lässt man ihn los, piept er weiter.": { en: "A buzzer beeps until a button is pressed. Release it and it keeps beeping." },
  "Stolperfalle": { en: "Tripwire Alarm" },
  "Stolperfalle ohne das Stolpern halt.": { en: "Tripwire without the tripping." },
  "Fan zu abkühlen": { en: "Cooling Fan" },
  "Ein kleiner Lüfter der jemanden schön abkühlen kann mit ca. 60dB.": { en: "A small fan that can cool someone down at about 60dB." },
  "3DS Modding": { en: "3DS Modding" },
  "Modifizierter Nintendo 3DS mit neuer Software. Mehr Hilfe bei https://3ds.hacks.guide/": { en: "Modified Nintendo 3DS with new software. More help at https://3ds.hacks.guide/" },
  "Samsung S6 Edge Modding": { en: "Samsung S6 Edge Modding" },
  "Modifizierter Samsung S6 Edge mit neuer Software.(Unoffical Custom ROM LineageOS Andorid 11 mit Gapps) OEM entsperrt. Bootloader entsperrt. Odin ist Benötigt.": { en: "Modified Samsung S6 Edge with new software. (Unofficial Custom ROM LineageOS Android 11 with Gapps) OEM unlocked. Bootloader unlocked. Odin required." },
  "Samsung J5  Modding": { en: "Samsung J5 Modding" },
  "Modifizierter Samsung J5 mit neuer Software.(Unoffical Custom ROM LineageOS Andorid 11 mit Gapps) OEM entsperrt. Bootloader entsperrt. Odin ist Benötigt.": { en: "Modified Samsung J5 with new software. (Unofficial Custom ROM LineageOS Android 11 with Gapps) OEM unlocked. Bootloader unlocked. Odin required." },
  "Samsung Galaxy 5 Tab   Modding": { en: "Samsung Galaxy Tab 5 Modding" },
  "Modifizierter Samsung Galaxy 5 Tab mit neuer Software.(Unoffical Custom ROM LineageOS Andorid 10 mit Gapps) OEM entsperrt. Bootloader entsperrt. Odin ist Benötigt.": { en: "Modified Samsung Galaxy Tab 5 with new software. (Unofficial Custom ROM LineageOS Android 10 with Gapps) OEM unlocked. Bootloader unlocked. Odin required." },
  // Common terms
  "Komponente": { en: "Component" },
  "Datum": { en: "Date" },
  "Projekt öffnen": { en: "Open Project" },
  "mehr": { en: "more" },
};

function translate(text) {
  if (currentLanguage === 'de') return text;
  return translations[text]?.en || text;
}

function makeChip(text, badgeText = null) {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.innerHTML = `${badgeText ? `<span class="badge">${translate(badgeText)}</span>` : ""}${escapeHtml(text)}`;
  return chip;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', translate(project.title) + ' ' + translate('Projekt öffnen'));

  card.innerHTML = `
    <img src="${project.image}" alt="${translate(project.title)}" class="project-image" onerror="this.style.display='none'">
    <h3>${translate(project.title)}</h3>
    <p>${translate(project.description)}</p>
    <small class="date">${project.date}</small>
  `;

  const specs = Array.isArray(project.specs) ? project.specs : [];
  if (specs.length) {
    const chipsWrap = document.createElement('div');
    chipsWrap.className = 'chips';
    const maxVisible = 3;
    specs.slice(0, maxVisible).forEach((s, i) => {
      chipsWrap.appendChild(makeChip(s, i === 0 ? "Komponente" : null));
    });
    const remaining = specs.length - maxVisible;
    if (remaining > 0) {
      const moreChip = document.createElement('span');
      moreChip.className = 'chip';
      moreChip.innerHTML = `<span class="badge">+${remaining}</span> ${translate('mehr')}`;
      chipsWrap.appendChild(moreChip);
    }
    card.appendChild(chipsWrap);
  }

  card.onclick = () => openModal(project);
  card.onkeypress = (e) => { if (e.key === 'Enter') openModal(project); };

  return card;
}

let currentImages = [];
let selectedIndex = 0;

function openModal(project) {
  currentImages = [];

  if (project.image) currentImages.push({ type: 'image', src: project.image });
  if (project.image2) currentImages.push({ type: 'image', src: project.image2 });
  if (project.image3) {
    if (project.image3.toLowerCase().endsWith('.mp4')) {
      currentImages.push({ type: 'video', src: project.image3 });
    } else {
      currentImages.push({ type: 'image', src: project.image3 });
    }
  }

  selectedIndex = 0;
  const selected = currentImages[0];

  const mediaHtml = selected && selected.type === 'video'
    ? `<video id="main-img" class="project-image" controls>
         <source src="${selected.src}" type="video/mp4">
         Dein Browser unterstützt kein Video.
       </video>`
    : `<img id="main-img" src="${selected ? selected.src : ''}" alt="${translate(project.title)}" class="project-image">`;

  modalBody.innerHTML = `
    <h2 id="modalTitle">${translate(project.title)}</h2>
    <p>${translate(project.description)}</p>
    <ul>${(project.specs || []).map(s => `<li>${s}</li>`).join('')}</ul>
    <p class="date">${translate('Datum')}: ${project.date}</p>
    ${mediaHtml}
    <div class="image-gallery">
      ${currentImages.map((item, i) => {
        let thumbSrc = '';
        if(item.type === 'video') {
          thumbSrc = project.videoThumbnail || 'https://via.placeholder.com/100x70?text=Video';
        } else {
          thumbSrc = item.src;
        }
        return `<img src="${thumbSrc}" data-index="${i}" alt="Bild ${i + 1}" class="${i === 0 ? 'selected' : ''}">`;
      }).join('')}
    </div>
  `;

  modal.style.display = 'flex';
  modal.focus();

  const galleryImgs = modalBody.querySelectorAll('.image-gallery img');
  galleryImgs.forEach(img => { img.onclick = () => { selectImage(parseInt(img.dataset.index)); }; });
}

function selectImage(index) {
  if (index === selectedIndex) return;
  selectedIndex = index;

  const container = document.getElementById('main-img');
  const selected = currentImages[index];
  let newElement;

  if (selected.type === 'video') {
    newElement = document.createElement('video');
    newElement.id = 'main-img';
    newElement.className = 'project-image';
    newElement.controls = true;
    const source = document.createElement('source');
    source.src = selected.src;
    source.type = 'video/mp4';
    newElement.appendChild(source);
  } else {
    newElement = document.createElement('img');
    newElement.id = 'main-img';
    newElement.className = 'project-image';
    newElement.src = selected.src;
    newElement.alt = 'Bild';
  }

  container.replaceWith(newElement);

  const galleryImgs = modalBody.querySelectorAll('.image-gallery img');
  galleryImgs.forEach(img => { img.classList.toggle('selected', parseInt(img.dataset.index) === index); });
}

function closeModal() { modal.style.display = 'none'; modalBody.innerHTML = ''; }
modal.onclick = function(event) { if (event.target === modal) closeModal(); };
document.addEventListener('keydown', function(e) { if (e.key === "Escape" && modal.style.display === 'flex') closeModal(); });

function renderProjects(filter = '') {
  projectsDiv.innerHTML = '';
  for (const [category, projects] of Object.entries(projectCategories)) {
    const filtered = projects.filter(proj =>
      proj.title.toLowerCase().includes(filter.toLowerCase()) ||
      proj.description.toLowerCase().includes(filter.toLowerCase())
    );
    if (filtered.length === 0) continue;

    const catDiv = document.createElement('div');
    catDiv.className = 'project-category';
    const h2 = document.createElement('h2'); h2.textContent = translate(category); catDiv.appendChild(h2);

    const container = document.createElement('div'); container.className = 'project-container';
    filtered.forEach(proj => { container.appendChild(createProjectCard(proj)); });
    catDiv.appendChild(container);
    projectsDiv.appendChild(catDiv);
  }
}

// Fade-In beim Laden
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Einklappbare Impressum Sections (nur wenn vorhanden)
document.querySelectorAll(".imp-title").forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.classList.toggle("open");
  });
});

// Scroll-To-Top Button (nur wenn vorhanden)
const toTop = document.getElementById("toTop");

if (toTop) {
  window.addEventListener("scroll", () => {
    toTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

document.addEventListener("keydown", (e) => {
  if (modal.style.display !== 'flex') return;

  if (e.key === "ArrowRight") {
    selectImage((selectedIndex + 1) % currentImages.length);
  }
  if (e.key === "ArrowLeft") {
    selectImage((selectedIndex - 1 + currentImages.length) % currentImages.length);
  }
});

searchInput.addEventListener('input', (e) => { renderProjects(e.target.value); });

// Language toggle button handler
const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
    langToggle.textContent = currentLanguage === 'de' ? '🇬🇧 EN' : '🇩🇪 DE';
    renderProjects(searchInput.value);
  });
}

renderProjects();
