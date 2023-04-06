if (localStorage.getItem('formSubmissions') === null) {
    localStorage.setItem('formSubmissions', 0);
  }
  document.querySelector('.submit-btn').addEventListener('click', function() {
  localStorage.setItem('formSubmissions', parseInt(localStorage.getItem('formSubmissions')) + 1);
  });