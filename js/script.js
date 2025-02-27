// Theme Management
// Handles dark/light mode switching and persists theme choice in localStorage
const themeToggle = document.querySelector(".theme-toggle");
const htmlElement = document.documentElement;
const themeIcon = document.querySelector(".theme-toggle i");

// Load saved theme or default to dark
const savedTheme = localStorage.getItem("theme") || "dark";
htmlElement.setAttribute("data-theme", savedTheme);
themeIcon.className = savedTheme === "dark" ? "fas fa-moon" : "fas fa-sun";

// Theme toggle event handler with particle color update
themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  htmlElement.setAttribute("data-theme", newTheme);
  themeIcon.className = newTheme === "dark" ? "fas fa-moon" : "fas fa-sun";
  localStorage.setItem("theme", newTheme);

  // Update particles color based on theme
  updateParticlesColor(newTheme);
});

// Particle System Management
// Updates particle colors based on current theme
function updateParticlesColor(theme) {
  const particlesColor = theme === "dark" ? "#535030" : "#847c4d";
  pJSDom[0].pJS.particles.color.value = particlesColor;
  pJSDom[0].pJS.particles.line_linked.color = particlesColor;
  pJSDom[0].pJS.fn.particlesRefresh();
}

// Loading Screen
// Shows loading animation for 1 second before revealing content
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loading").classList.add("hidden");
  }, 1000);
});

// Scroll Progress Indicator
// Shows reading progress at the top of the page
window.addEventListener("scroll", () => {
  const winScroll = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
});

// Social Share System
// Handles Twitter sharing and link copying functionality
document.querySelectorAll(".share-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.querySelector(".fa-twitter")) {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          window.location.href
        )}`
      );
    } else if (btn.querySelector(".fa-link")) {
      navigator.clipboard.writeText(window.location.href);
      btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-link"></i> Copy';
      }, 2000);
    }
  });
});

// View Counter
// Tracks page views using localStorage
let views = parseInt(localStorage.getItem("pageViews") || "0");
views++;
localStorage.setItem("pageViews", views.toString());
document.getElementById("viewCount").textContent = views;

// Dropdown Menu System
// Handles the expandable "More Links" section
const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownContent.classList.toggle("active");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownContent.classList.remove("active");
  }
});

// Custom Cursor Implementation
// Creates a following cursor effect
const cursor = document.querySelector(".custom-cursor");
document.addEventListener("mousemove", (e) => {
  const cursorSize = 20; // Must match the width/height in CSS
  cursor.style.left = e.clientX - cursorSize / 2 + "px";
  cursor.style.top = e.clientY - cursorSize / 2 + "px";
});

document.addEventListener("mousedown", () => cursor.classList.add("active"));
document.addEventListener("mouseup", () => cursor.classList.remove("active"));

// Particle.js Configuration
// Sets up the background particle system with theme-aware colors
particlesJS("particles-js", {
  particles: {
    number: { value: 50 }, // Reduced number of particles
    color: { value: savedTheme === "dark" ? "#535030" : "#847c4d" },
    shape: { type: "circle" },
    opacity: {
      value: 0.3,
      random: true,
    },
    size: {
      value: 2,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: savedTheme === "dark" ? "#535030" : "#847c4d",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8, // Reduced speed
      direction: "none",
      random: false,
      straight: false,
      outMode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5,
        },
      },
    },
  },
});

// Music Player System
// Handles music playback controls and track management
const songs = [
  { title: "Song 1", url: "url-to-song-1" },
  { title: "Song 2", url: "url-to-song-2" },
  { title: "Song 3", url: "url-to-song-3" },
];
let currentSong = 0;
let isPlaying = false;

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const songTitle = document.getElementById("song-title");

playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  playBtn.innerHTML = isPlaying
    ? '<i class="fas fa-pause"></i>'
    : '<i class="fas fa-play"></i>';
  songTitle.textContent = songs[currentSong].title;
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  songTitle.textContent = songs[currentSong].title;
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  songTitle.textContent = songs[currentSong].title;
});

// Link Click Animation
// Creates ripple effect when clicking links
document.querySelectorAll(".link-card").forEach((link) => {
  link.addEventListener("click", (e) => {
    const circle = document.createElement("div");
    circle.classList.add("link-click");
    circle.style.left = e.offsetX + "px";
    circle.style.top = e.offsetY + "px";
    link.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
  });
});

// Typing Animation
// Creates typewriter effect for bio text
const bio = document.querySelector(".profile p");
const text = bio.textContent;
bio.innerHTML = "";
bio.classList.add("typing-text");

let i = 0;
const typeDelay = 50; // Faster typing speed

function typeWriter() {
  if (i < text.length) {
    requestAnimationFrame(() => {
      bio.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, typeDelay);
    });
  } else {
    bio.classList.add("typing-done");
  }
}

setTimeout(typeWriter, 1000);

// Disabled Link Handler
// Prevents interaction with disabled links
document.querySelectorAll(".link-card.disabled").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
