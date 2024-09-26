document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm'); 
     
    loginForm.addEventListener('submit', function (event) {
       window.alert('fetching data....')
       event.preventDefault();
 
       const username = document.getElementById('username').value;
       const password = document.getElementById('password').value;
 
       console.log(username, password)
 
       const storedUsername = localStorage.getItem('username');
       const storedPassword = localStorage.getItem('password');
 
      
 
    })
 
 
 
 })