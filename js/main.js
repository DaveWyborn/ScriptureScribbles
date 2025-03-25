const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});


document.addEventListener('DOMContentLoaded', () => {
  const accessibilityBtn = document.getElementById('accessibilityToggle');
  accessibilityBtn.addEventListener('click', () => {
    document.body.classList.toggle('accessible');
  });
});


