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


    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    var images = document.querySelectorAll('.clickable-image');
    images.forEach(function(img) {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }


    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    document.getElementById("bookingForm").addEventListener("submit", function(event) {
        event.preventDefault(); 


        var lastName = document.getElementById("lastName").value;
        var firstName = document.getElementById("firstName").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var checkIn = document.getElementById("checkIn").value;
        var checkOut = document.getElementById("checkOut").value;
        var adults = document.getElementById("adults").value;
        var children = document.getElementById("children").value;

     

        alert("Бронирование оформлено!\nФамилия: " + lastName + "\nИмя: " + firstName + "\nТелефон: " + phone + "\nEmail: " + email + "\nЗаезд: " + checkIn + "\nВыезд: " + checkOut + "\nВзрослые: " + adults + "\nДетские: " + children);


        document.getElementById("bookingForm").reset();
    });
});