const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // send a request to a server to check if the user is authorized
    // if the user is authorized, redirect them to the main page
    // otherwise, show an error message
});