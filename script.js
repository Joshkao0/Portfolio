const projectCategories = {
 
   "Arduino UNO R3 Projekte": [
  {
      title: "LED-Roulette",
      description: "5 LEDs mit Zufallswurf.",
      specs: ["1x Steckbrett", "5x LED","5x 220Ω Widerstand"],
      date: "18.5.2025",
      image: "img/led-roulette1.webp",
      image2: "img/led-roulette2.webp",
      image3: "img/Videos/led-roulette3.mp4",
      videoThumbnail: "img/Thumbnail/led-roulette3.webp"
  },
  {
      title: "Space Invaders - alte Version",
      description: "Space Invaders mit OLED-Display und Potentiometer. Alte Version hier ohne, weil mein Potentiometer kaputt ging :(",
      specs: ["1x Steckbrett", "1x Arduino UNO R3", "0.96\" SPI OLED", "1x Potentiometer"],
      date: "Mai 2025",
      image: "img/space_invaders_alt1.webp",
  },
  {
      title: "Servo Gate",
      description: "Ein gate das mit einem ultraschall sensor geöffnet und geschlossen wird. Es ist mehr ein Test ob die Servos funktionieren, aber es ist trotzdem ganz lustig geworden.",
      specs: ["1x Servo Motor","xy Jumper Kabel"],
      date: "30.8.2025",
      image: "img/Servo1.webp",
      image2: "img/Servo2.webp", 
  },
  ],
  "ESP-Projekte": [
    {
      title: "Space Invaders - aktualisierter Bau",
      description: "Space Invaders mit OLED-Display und Potentiometer aktualisierter.",
      specs: ["2x Steckbrett", "1x ESP32", "0.96\" I2C OLED", "1x Buzzer", "1x Potentiometer"],
      date: "Mai 2025",
      image: "img/space_invaders_neu1.webp",
  },
  {
      title: "RC-Car mit WiFi (abgebrochen)", 
      description: "Ein ferngesteuertes Auto über WLAN.",
      specs: ["1x ESP8266", "4x DC-Motoren", "1x L298N", "App-gesteuert"],
      date: "Juni 2025",
      image: "img/rc_car1.webp",
      
  },
  {
      title: "Flappybird",
      description: "Ähnlich wie Space Invaders ein Fun-Spielzeug für zwischendurch.",
      specs: ["1x ESP32","1x Steckbrett","0.96\" I2C OLED","1x Button"],
      date: "1.8.2025",
      image: "img/Flappybird1.webp",
      image2: "img/Flappybird2.webp",
      image3: "img/Videos/Flappybird3.mp4",
      videoThumbnail: "img/Thumbnail/Flappybird3.webp"
  },
  {
      title: "ESP32 Access Point",
      description: "Ein ESP32 der einen WiFi Access Point erstelltt. Es ist ein einfaches Projekt um die WiFi Fähigkeiten des ESP32 zu testen.",
      specs: ["1x ESP32", "WiFi Access Point"],
      date: "10.8.2025",
      image: "img/esp_ap1.webp",


  },
  {
      title: "ESP8266 Licht an und aus schalten",
      description: "Ein ESP8266 schaltet ein Licht ein und aus.(das bild ist von https://github.com/Enjoy-Mechatronics/ESP8266-Smart-Switch)",
      specs: ["1x ESP8266", "1x LED", "1x 220Ω Widerstand"],
      date: "15.8.2025",
      image: "img/Circuit-Diagram.webp",
      
  },
    




  ],

   "Raspberry Pi Pico 2/Pico WH": [
  {
      title: "Raspberry Pi Pico 2",
      description: "Eine einafaches an und aus der eingebauten LED mit MicroPython.",
      specs: ["1x Raspberry Pi Pico 2", "MicroPython"],
      date: "15.8.2025",
      image: "img/pico_led1.webp",
      image2: "img/pico_led2.webp",
      
  }, 
  {
      title: "Raspberry Pi Pico 2 - External LED",
      description: "Ein Raspberry Pi Pico 2 schaltet eine externe LED ein und aus. Es ist ein einfaches Projekt um die GPIO Pins des Pico 2 zu testen(das aller erstemal den pico 2 benutzt).",
      specs: ["1x Raspberry Pi Pico 2", "1x LED", "1x 220Ω Widerstand"],
      date: "15.8.2025",
      image: "img/pico_led_ext1.webp",
      image2: "img/pico_led_ext2.webp",

  },
  {

      title: "Raspberry Pi Pico 2 - GIF Display",
      description: "Ein Raspberry Pi Pico 2 mit einem OLED Display das GIFs anzeigen kann. Es ist ein lustiges Projekt um die Möglichkeiten des Pico 2 zu zeigen.",
      date: "15.8.2025",
      specs: ["1x Raspberry Pi Pico 2", "1x OLED Display", "MicroPython"],
      image: "img/pico_gif1.webp",
      image3: "img/Videos/pico_gif2.mp4",
      videoThumbnail: "img/Thumbnail/pico_gif1.webp",
  },
  {
      title: "Raspberry Pi Pico WH - Tisch uhr",
      description: "Ein Raspberry Pi Pico WH mit einem OLED Display das die aktuelle Zeit anzeigt. Es ist ein einfaches Projekt um die Möglichkeiten des Pico WH zu zeigen.",
      date: "15.8.2025",
      specs: ["1x Raspberry Pi Pico WH", "1x OLED Display", "MicroPython",],
      image: "img/pico_uhr1.webp",
      image2: "img/pico_uhr2.webp",
      image3: "img/pico_uhr3.webp",
  
  },

  ],

  "Raspberry Pi 5/2": [
  {
      title: "Raspberry Pi 5",
      description: "Server tool für ein Minecraft Server, man kann damit den Server starten, stoppen und neustarten. Es zeigt auch die Server Konsole man kann mit modifikationen auch speielen.",
      specs: ["Raspberry Pi 5", "Minecraft Server", "Playit"],
      date: "In Arbeit",
      image: "img/pi5.webp",
      image2: "img/pi5_1.webp",
      
  },
    
  { 
      title: "Raspberry Pi Zero 2W P4wnP1 A.L.O.A.",
      description: "Ein Raspberry Pi Zero 2W mit P4wnP1 A.L.O.A. installiert. Es ist ein Tool für Penetrationstests und kann als USB-Gadget fungieren, um verschiedene Angriffe durchzuführen.",
      specs: ["1x Raspberry Pi Zero 2W", "P4wnP1 A.L.O.A.", "Pi OS Lite","Micro SD Karte Min 16GB"],
      date: "15.8.2025",
      image: "img/pi_zero2w1.webp",
  },
  {
      title: "Raspberry Pi 2",
      description: "Ich habe ein Raspberry PI 2 von meinem Klassen Lehrer bekommen! Ich habe nur basic sachen mit dem PI image gemacht, wie z.B. Recalbox installiert und ein bisschen mit PI OS rumgespielt. Ich habe auch ein bisschen mit Python und GPIO Pins rumgespielt, aber nichts großes gemacht.",
      date: "20.2.2026",
      specs: ["Raspberry Pi 2", "Recalbox", "Python", "GPIO Pins"],
      image: "img/raspberry_pi2.webp",
      image2: "img/raspberry_pi2.webp",
      image3: "img/raspberry_pi2.webp",
 },


  ],
    "Modding": [
  {
      title: "3DS Modding",
      description: "Modifizierter Nintendo 3DS mit neuer Software. Mehr Hilfe bei https://3ds.hacks.guide/",
      specs: ["Nintendo 3DS", "Homebrew Launcher", "Micro SD Karte Min 32GB"],
      date: "2025",
      image: "img/3ds_mod1.webp",
  },
  {
      title: "Samsung S6 Edge Modding",
      description: "Modifizierter Samsung S6 Edge mit neuer Software.(Unoffical Custom ROM LineageOS Andorid 11 mit Gapps) OEM entsperrt. Bootloader entsperrt. Odin ist Benötigt.",
      specs: ["Samsung S6 Edge", "Custom ROM", "Micro SD Karte Min 8GB"],
      date: "23.12.2025",
      image: "img/s6_edge_mod1.webp",
      image2: "img/s6_edge_mod2.webp",
  },
  {
      title: "Samsung J5  Modding",
      description: "Modifizierter Samsung J5 mit neuer Software.(Unoffical Custom ROM LineageOS Andorid 11 mit Gapps) OEM entsperrt. Bootloader entsperrt. Odin ist Benötigt.",
      specs: ["Samsung J5", "Custom ROM", "Micro SD Karte Min 8GB"],
      date: "20.12.2025",
      image: "img/j5_mod1.webp",
      image2: "img/j5_mod2.webp",
  },
  ],  
  "Nur mit Strom/Steckbrett": [
  {
      title: "Lichtschaltung",
      description: "Eine LED wird per Knopfdruck ausgeschaltet. Lässt man den Knopf los, geht die andere LED an.",
      specs: ["1x Steckbrett", "2x LED","1x Knopf", "1x 220Ω Widerstand"],
      date: "16.4.2025",
      image: "img/lichtpoten1.webp",
      image2: "img/lichtpoten2.webp",
  },
  {
      title: "LED-Helligkeit",
      description: "Eine einfache Lichtsteuerung mit einem Potentiometer.",
      specs: ["1x Steckbrett","1x LED", "1x Potentiometer", "1x 220Ω Widerstand"],
      date: "16.4.2025",
      image: "img/led-helligkeit1.webp",
      image2: "img/led-helligkeit2.webp",
  },
  {
      title: "Buzzer Peep",
      description: "Ein Buzzer piept, bis ein Knopf gedrückt wird. Lässt man ihn los, piept er weiter.",
      specs: ["1x Steckbrett", "1x LED","1x 220Ω Widerstand", "1x Button", "1x Aktiver Buzzer"],
      date: "16.4.2025",
      image: "img/buzzer_peep1.webp",
  },
  {
      title: "Stolperfalle",
      description: "Stolperfalle ohne das Stolpern halt.",
      specs: ["1x Steckbrett", "1x LED", "1x 10KΩ Widerstand", "1x BC547 Transistor", "1x LDR", "1x Buzzer", "1x Laser"],
      date: "1.8.2025",
      image: "img/Stolerfalle1.webp",
      image2: "img/Stolerfalle2.webp",
  },
  {
      title: "Fan zu abkühlen",
      description: "Ein kleiner Lüfter der jemanden schön abkühlen kann mit ca. 60dB.",
      specs: ["1x Steckbrett", "Handvoll mit Jumper-Kabeln", "1x DC Motor", "1x Potentiometer"],
      date: "4.8.2025",
      image: "img/Fan1.webp",
      image2: "img/Fan2.webp",
      image3: "img/Videos/Fan3.mp4",
      videoThumbnail: "img/Thumbnail/Fan2.webp",
  },
  ],
};

const projectsDiv = document.getElementById('projects');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const searchInput = document.getElementById('searchInput');

let currentLanguage = 'de';

const translations = {


  
// ===== PROFILE TRANSLATIONS =====
"Hi ich bin Joshkao und ich habe spaß mit Elektronik deshalb will ich zeigen was ich kann.": { 
  en: "Hi, I'm Joshkao and I enjoy tech and do stuff just for having fun." 
},
"Habt Spaß! Und schaut euch die Projekte an.": { 
  en: "Have fun! And check out the projects." 
},
"Hier ist mein Google Docs mit allen meinen Stuff das ich außerhalb tue!": { 
  en: "Here is my Google Docs with all the stuff I do outside of this portfolio!" 
},
"Abgeschlossene Projekte": { en: "Completed Projects" },
"Jahre Erfahrung": { en: "Years of Experience" },
"Verschiedene Boards": { en: "Different Boards" },



  // Category names
  "ESP-Projekte": { en: "ESP Projects" },
  "Arduino UNO R3 Projekte": { en: "Arduino UNO R3 Projects" },
  "Raspberry Pi Zero 2W": { en: "Raspberry Pi Zero 2W" },
  "Raspberry Pi Pico 2": { en: "Raspberry Pi Pico 2" },
  "Raspberry Pi Pico 2W/WH": { en: "Raspberry Pi Pico 2W/WH" },
  "Raspberry Pi 2": { en: "Raspberry Pi 2" },
  "Raspberry Pi 5": { en: "Raspberry Pi 5" },
  "Modding": { en: "Modding" },
  "Nur mit Strom/Steckbrett": { en: "Power/Breadboard Only" },

  // Project titles and descriptions
  //ESP Projekte
  "Space Invaders - aktualisierter Bau": { en: "Space Invaders - Updated Build" },
  "Space Invaders mit OLED-Display und Potentiometer aktualisierter.": { en: "Space Invaders with OLED display and updated potentiometer." },
  "RC-Car mit WiFi (abgebrochen)": { en: "RC Car with WiFi (Discontinued)" },
  "Ein ferngesteuertes Auto über WLAN.": { en: "A remote controlled car via WiFi." },
  "Flappybird": { en: "Flappybird" },
  "Ähnlich wie Space Invaders ein Fun-Spielzeug für zwischendurch.": { en: "Similar to sSpace Invaders, a fun toy to play with." },
  "ESP8266 Licht an und aus schalten": { en: "ESP8266 Light On/Off" },
  "Ein ESP8266 schaltet ein Licht ein und aus.(das bild ist von https://github.com/Enjoy-Mechatronics/ESP8266-Smart-Switch)": { en: "An ESP8266 that turns a light on and off.(the image is from https://github.com/Enjoy-Mechatronics/ESP8266-Smart-Switch)" },
  "ESP32 Access Point": { en: "ESP32 Access Point" },
  "Ein ESP32 der einen WiFi Access Point erstelltt. Es ist ein einfaches Projekt um die WiFi Fähigkeiten des ESP32 zu testen.": { en: "An ESP32 that creates a WiFi Access Point. It's a simple project to test the WiFi capabilities of the ESP32." },
  //Arduino UNO R3
  "LED-Roulette": { en: "LED Roulette" },
  "5 LEDs mit Zufallswurf.": { en: "5 LEDs with random selection." },
  "Space Invaders - alte Version": { en: "Space Invaders - Old Version" },
  "Space Invaders mit OLED-Display und Potentiometer. Alte Version hier ohne, weil mein Potentiometer kaputt ging :(": { en: "Space Invaders with OLED display and potentiometer. Old version without it because my potentiometer broke :(" },
  "Servo Gate": { en: "Servo Gate" },
  "Ein gate das mit einem ultraschall sensor geöffnet und geschlossen wird. Es ist mehr ein Test ob die Servos funktionieren, aber es ist trotzdem ganz lustig geworden.": { en: "A gate that is opened and closed with an ultrasonic sensor. It is more of a test to see if the servos work, but it was still quite fun." },
  //Raspberry Pi Zero 2W
  "Raspberry Pi Zero 2W P4wnP1 A.L.O.A.": { en: "Raspberry Pi Zero 2W P4wnP1 A.L.O.A." },
  "Ein Raspberry Pi Zero 2W mit P4wnP1 A.L.O.A. installiert. Es ist ein Tool für Penetrationstests und kann als USB-Gadget fungieren, um verschiedene Angriffe durchzuführen.": { en: "A Raspberry Pi Zero 2W with P4wnP1 A.L.O.A. installed. It is a tool for penetration testing and can function as a USB gadget to perform various attacks." }, 
  //Raspberry Pi Pico 2
  "Raspberry Pi Pico 2": { en: "Raspberry Pi Pico 2" },
  "Eine einafaches an und aus der eingebauten LED mit MicroPython.": { en: "A simple on and off of the built-in LED with MicroPython." },
  "Raspberry Pi Pico 2 - GIF Display": { en: "Raspberry Pi Pico 2 - GIF Display" },
  "Ein Raspberry Pi Pico 2 mit einem OLED Display das GIFs anzeigen kann. Es ist ein lustiges Projekt um die Möglichkeiten des Pico 2 zu zeigen.": { en: "A Raspberry Pi Pico 2 with an OLED display that can show GIFs. It's a fun project to showcase the capabilities of the Pico 2." },
  "Raspberry Pi Pico 2 - External LED": { en: "Raspberry Pi Pico 2 - External LED" },
  "Ein Raspberry Pi Pico 2 schaltet eine externe LED ein und aus. Es ist ein einfaches Projekt um die GPIO Pins des Pico 2 zu testen(das aller erstemal den pico 2 benutzt).": { en: "A Raspberry Pi Pico 2 turns an external LED on and off. It's a simple project to test the GPIO pins of the Pico 2 (the very first time using the Pico 2)." },
  //Raspberry Pi Pico 2W/WH
  "Raspberry Pi Pico WH - Tisch uhr": { en: "Raspberry Pi Pico WH - Table Clock" },                                                                                     //HIER BEARBEITEN
  "Ein Raspberry Pi Pico WH mit einem OLED Display das die aktuelle Zeit anzeigt. Es ist ein einfaches Projekt um die Möglichkeiten des Pico WH zu zeigen.": { en: "A Raspberry Pi Pico WH with an OLED display that shows the current time. It's a simple project to demonstrate the capabilities of the Pico WH." },
  //PI2
  "Raspberry Pi 2": { en: "Raspberry Pi 2" },
  //Projekt Raspberry Pi 2
  "Ich habe ein Raspberry PI 2 von meinem Klassen Lehrer bekommen! Ich habe nur basic sachen mit dem PI image gemacht, wie z.B. Recalbox installiert und ein bisschen mit PI OS rumgespielt. Ich habe auch ein bisschen mit Python und GPIO Pins rumgespielt, aber nichts großes gemacht.": { en: "I got a Raspberry Pi 2 from my class teacher! I only did basic stuff with the Pi image, like installing Recalbox and playing around with Pi OS. I also played a bit with Python and GPIO pins, but didn't do anything big." },
  //PI 5
  "Raspberry Pi 5": { en: "Raspberry Pi 5" },
  //Projekte Raspberry Pi 5
  "Server tool für ein Minecraft Server, man kann damit den Server starten, stoppen und neustarten. Es zeigt auch die Server Konsole man kann mit modifikationen auch speielen.": { en: "Server tool for a Minecraft server, you can use it to start, stop, and restart the server. It also shows the server console and you can play with modifications." },
  //Modding
  "3DS Modding": { en: "3DS Modding" },
  "Modifizierter Nintendo 3DS mit neuer Software. Mehr Hilfe bei https://3ds.hacks.guide/": { en: "Modified Nintendo 3DS with new software. More help at https://3ds.hacks.guide/" },
  "Samsung S6 Edge Modding": { en: "Samsung S6 Edge Modding" },
  "Modifizierter Samsung S6 Edge mit neuer Software.(Unoffical Custom ROM LineageOS Andorid 11 mit Gapps) OEM entsperrt. Bootloader entsperrt. Odin ist Benötigt.": { en: "Modified Samsung S6 Edge with new software. (Unofficial Custom ROM LineageOS Android 11 with Gapps) OEM unlocked. Bootloader unlocked. Odin required." },
  "Samsung J5  Modding": { en: "Samsung J5 Modding" },
  "Modifizierter Samsung J5 mit neuer Software.(Unoffical Custom ROM LineageOS Andorid 11 mit Gapps) OEM entsperrt. Bootloader entsperrt. Odin ist Benötigt.": { en: "Modified Samsung J5 with new software. (Unofficial Custom ROM LineageOS Android 11 with Gapps) OEM unlocked. Bootloader unlocked. Odin required." },
  //Nur mit Strom/Steckbrett
  "Lichtschaltung": { en: "Light Switch" },
  "Eine LED wird per Knopfdruck ausgeschaltet. Lässt man den Knopf los, geht die andere LED an.": { en: "One LED turns off when a button is pressed. Release the button and another LED turns on." },
  "LED-Helligkeit": { en: "LED Brightness" },
  "Eine einfache Lichtsteuerung mit einem Potentiometer.": { en: "Simple light control with a potentiometer." },
  "Buzzer Peep": { en: "Buzzer Beep" },
  "Ein Buzzer piept, bis ein Knopf gedrückt wird. Lässt man ihn los, piept er weiter.": { en: "A buzzer beeps until a button is pressed. Release it and it keeps beeping." },
  "Stolperfalle": { en: "Tripwire Alarm" },
  "Stolperfalle ohne das Stolpern halt.": { en: "Tripwire without the tripping." },
  "Was könnte der neue Teaser sein?": { en: "What could the new teaser be?" },
  "Fan zu abkühlen": { en: "Cooling Fan" },
  "Ein kleiner Lüfter der jemanden schön abkühlen kann mit ca. 60dB.": { en: "A small fan that can cool someone down at about 60dB." },
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

// ===== STATIC PROFILE TEXT TRANSLATION =====
function translateStaticTexts() {

  // Subtitle
  const subtitle = document.querySelector('.profile-subtitle');
  if (subtitle) {
    subtitle.textContent = translate(
      "Hi ich bin Joshkao und ich habe spaß mit Elektronik deshalb will ich zeigen was ich kann."
    );
  }

  // Description
  const description = document.querySelector('.profile-description');
  if (description) {
    description.textContent = translate(
      "Habt Spaß! Und schaut euch die Projekte an."
    );
  }

  // Google Docs Text (mit Link erhalten)
  const googleDocs = document.querySelector('.Google-Docs');
  if (googleDocs) {
    googleDocs.innerHTML = `
      ${translate("Hier ist mein Google Docs mit allen meinen Stuff das ich außerhalb tue!")}
      <a href="https://docs.google.com/document/d/1KYouftarPhQ07WWtBuGrrN9v8OMkQOC9dEZHdIldZng/edit?tab=t.0">
      Google Docs
      </a>
    `;
  }

// Stats Labels (FIXED)
document.querySelectorAll('.profile-stat-label').forEach(el => {

  // Originaltext beim ersten Mal speichern
  if (!el.dataset.original) {
    el.dataset.original = el.textContent.trim();
  }

  el.textContent = translate(el.dataset.original);
});

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
  ${project.image ? 
    `<img src="${project.image}" alt="${translate(project.title)}" class="project-image">`
    :
    `<div class="project-image placeholder">Kein Bild</div>`
  }
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
document.addEventListener("DOMContentLoaded", () => {
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

/// Language toggle button handler
const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
    langToggle.textContent = currentLanguage === 'de' ? '🇬🇧 EN' : '🇩🇪 DE';

    renderProjects(searchInput.value);
    translateStaticTexts(); // 👈 WICHTIG
  });
}

renderProjects();
translateStaticTexts();
