var loginModal = document.getElementById("loginModal");
var loginBtn = document.getElementById("loginBtn");
var closeLoginModal = document.getElementById("closeLoginModal");
var switchToRegister = document.getElementById("switchToRegister");

loginBtn.onclick = function() {
  loginModal.style.display = "block";
}

closeLoginModal.onclick = function() {
  loginModal.style.display = "none";
}

switchToRegister.onclick = function(event) {
  event.preventDefault();
  loginModal.style.display = "none";
  registerModal.style.display = "block";
}

var registerModal = document.getElementById("registerModal");
var closeRegisterModal = document.getElementById("closeRegisterModal");
var switchToLogin = document.getElementById("switchToLogin");

closeRegisterModal.onclick = function() {
  registerModal.style.display = "none";
}

switchToLogin.onclick = function(event) {
  event.preventDefault();
  registerModal.style.display = "none";
  loginModal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target == registerModal) {
    registerModal.style.display = "none";
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








