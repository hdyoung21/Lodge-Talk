const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // send a request to a server to check if the user is authorized
    // if the user is authorized, redirect them to the main page
    // otherwise, show an error message
});

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  // check if the username and password are correct
  if (username === 'admin' && password === 'password') {
    // redirect to the index page
    window.location.href = 'index.html';
  } else {
    alert('Incorrect username or password. Please try again.');
  }
});
