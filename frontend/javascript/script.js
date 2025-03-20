document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "student" && password === "password123") {  
        window.location.href = 'face_verify.html';  
    } else {  
        alert("Invalid Credentials!");  
    }
});
