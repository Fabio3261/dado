// Oggetto per simulare la memorizzazione dei dati utente
const users = {};

// Switch tra form di login e registrazione
document.getElementById('showRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});

// Gestione registrazione
document.getElementById('registerFormSubmit').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    users[email] = username; // Salva il nome utente associato all'email
    window.location.href = `registerSuccess.html?username=${username}`;
});

// Gestione login
document.getElementById('loginFormSubmit').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const username = users[email] || email; // Recupera il nome utente o usa l'email se non trovato
    window.location.href = `loginSuccess.html?username=${username}`;
});
