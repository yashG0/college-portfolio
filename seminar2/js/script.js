const canvas = document.getElementById("techCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 0.5,
  vy: (Math.random() - 0.5) * 0.5,
  r: Math.random() * 2 + 1
}));

function animate() {
  ctx.fillStyle = "rgba(2, 6, 23, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.fillStyle = "#6366f1";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[j].x - p.x;
      const dy = particles[j].y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        ctx.strokeStyle = `rgba(99, 102, 241, ${1 - dist / 120})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(animate);
}
animate();




// step 2
const roles = [
  "Full Stack Developer",
  "Data Scientist",
  "AI & ML Learner",
  "Backend Engineer",
  "Problem Solver",
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingText.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;
  } else {
    typingText.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;
  }

  let typingSpeed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 1500; // pause after typing
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

// Start typing effect when element exists
if (typingText) {
  typeEffect();
}

// step 3 

const academics = [
  {
    icon: "🎓",
    title: "Master of Computer Applications",
    college: "G.H. Raisoni College of Engineering, Nagpur",
    year: "2024 – 2025 (Pursuing)",
    grade: "CGPA: 8.9/10"
  },
  {
    icon: "🎯",
    title: "Bachelor of Computer Applications",
    college: "Government College, Nagpur",
    year: "2021 – 2023",
    grade: "Percentage: 67%"
  },
  {
    icon: "📚",
    title: "Higher Secondary (12th)",
    college: "Baba Nanak Jr College",
    year: "2019 – 2021",
    grade: "Percentage: 83.33%"
  },
  {
    icon: "📚",
    title: "Secondary (10th)",
    college: "Shri Rajendra high school mahal",
    year: "2018 – 2019",
    grade: "Percentage: 75.55%"
  }
];

const timeline = document.getElementById("academicsTimeline");

if (timeline) {
  academics.forEach((item, i) => {
    const side = i % 2 === 0 ? "left" : "right";
    timeline.innerHTML += `
      <div class="academic-item ${side}">
        <div class="academic-card">
          <div class="academic-icon">${item.icon}</div>
          <h3>${item.title}</h3>
          <p class="college">${item.college}</p>
          <p class="year">${item.year}</p>
          <span class="grade">${item.grade}</span>
        </div>
      </div>`;
  });

  // Scroll reveal for academic items
  const items = document.querySelectorAll(".academic-item");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  items.forEach(i => observer.observe(i));
}

// step 7 
const openContactBtn = document.getElementById('openContact');
const contactContainer = document.getElementById('contactContainer');
const contactBtnWrapper = document.getElementById('contactBtnWrapper');

if (openContactBtn && contactContainer) {
  openContactBtn.addEventListener('click', () => {
    contactContainer.classList.remove('hidden');
    contactBtnWrapper.style.display = 'none';
  });
}

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
    e.target.reset();
  });
}