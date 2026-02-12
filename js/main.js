// mobile nav
hamburger.onclick = () => {
  navMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
};

// Close menu on link click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});


// Theme toggle
themeToggle.onclick = () => {
  document.body.classList.toggle("light");
  themeToggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
};

// Counters
document.querySelectorAll(".counter").forEach(counter => {
  let target = +counter.dataset.target;
  let count = 0;

  const update = () => {
    count++;
    counter.innerText = count;
    if (count < target) requestAnimationFrame(update);
  };
  update();
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// 3D tilt effect
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * 10;
    const ry = ((x / r.width) - 0.5) * -10;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
// Contact form (FIXED)
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", e => {
  e.preventDefault();

  if (
    nameInput.value.trim() &&
    emailInput.value.trim() &&
    messageInput.value.trim()
  ) {
    formMsg.textContent = "Message sent successfully!";
    formMsg.style.color = "#4ade80"; // green

    contactForm.reset();
  } else {
    formMsg.textContent = "All fields required!";
    formMsg.style.color = "#f87171"; // red
  }
});

// Navbar scroll animation
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
