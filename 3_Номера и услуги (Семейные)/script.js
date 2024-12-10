document.addEventListener('DOMContentLoaded', function() {
    var loginModal = document.getElementById("loginModal");
    var registerModal = document.getElementById("registerModal");
    var loginBtn = document.getElementById("loginBtn");
    var switchToRegister = document.getElementById("switchToRegister");
    var switchToLogin = document.getElementById("switchToLogin");
    var closeLoginModal = document.getElementById("closeLoginModal");
    var closeRegisterModal = document.getElementById("closeRegisterModal");

    loginBtn.onclick = function(event) {
        event.preventDefault(); 
        loginModal.style.display = "block";
    }

    switchToRegister.onclick = function(event) {
        event.preventDefault(); 
        loginModal.style.display = "none";
        registerModal.style.display = "block";
    }

    switchToLogin.onclick = function(event) {
        event.preventDefault(); 
        registerModal.style.display = "none";
        loginModal.style.display = "block";
    }

    closeLoginModal.onclick = function() {
        loginModal.style.display = "none";
    }

    closeRegisterModal.onclick = function() {
        registerModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
    }
});