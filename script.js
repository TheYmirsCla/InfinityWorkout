// Toggle workout details
function toggleDetails(id) {
  const details = document.getElementById(id);
  details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');

// Check localStorage for user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  updateButtonText();
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const currentTheme = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
  localStorage.setItem('theme', currentTheme); // Save preference
  updateButtonText();
});

// Update button text based on current theme
function updateButtonText() {
  const isLightMode = document.body.classList.contains('light-mode');
  themeToggle.textContent = isLightMode ? 'Toggle Dark Mode' : 'Toggle Light Mode';
}

// Apply saved theme on page load
window.addEventListener('load', () => {
  if (savedTheme === 'light-mode') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
  updateButtonText();
});
