// Toggle workout details
function toggleDetails(id) {
  const details = document.getElementById(id);
  details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('light-mode') ? 'Toggle Dark Mode' : 'Toggle Light Mode';
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Handle form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const response = await fetch(contactForm.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    alert('Message sent successfully!');
    contactForm.reset();
  } else {
    alert('Oops! Something went wrong. Please try again.');
  }
});
