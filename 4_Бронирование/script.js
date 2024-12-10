document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.block-link');

    function setActiveLink(link) {

        links.forEach(function(l) {
            l.classList.remove('active');
        });

        link.classList.add('active');
    }

    function setInitialActiveLink() {
        var currentPath = window.location.pathname;

        links.forEach(function(link) {
            if (link.href.includes(currentPath)) {
                setActiveLink(link);
            }
        });
    }

 
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 

            setActiveLink(this);

            window.location.href = this.href;
        });
    });

    setInitialActiveLink();
});





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