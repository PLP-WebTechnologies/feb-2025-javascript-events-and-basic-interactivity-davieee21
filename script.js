const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');
const successMessage = document.getElementById('successMessage');

// Live character count
messageInput.addEventListener('input', () => {
  charCount.textContent = `${messageInput.value.length} / 200`;
});

// Form validation and success display
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Reset errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  successMessage.classList.remove('show');
  successMessage.textContent = '';

  let isValid = true;

  if (nameInput.value.trim() === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    isValid = false;
  }

  if (messageInput.value.trim() === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Your message has been sent!';
    successMessage.classList.add('show');
    form.reset();
    charCount.textContent = '0 / 200';

    // Hide message after 3 seconds
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 3000);
  }
});

// Dark mode toggle
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
