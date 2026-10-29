const formular = document.querySelector("#donation-form");
const email = document.querySelector("#email");
const fejlbesked = document.querySelector("#fejlbesked");

formular.addEventListener("submit", function (event) {
  // Forhindrer formularen i at genindlæse siden
  event.preventDefault();

  // Henter brugerens mailadresse
  const emailAdresse = email.value.trim();

  // Kontrollerer mailadressen
  if (!email.checkValidity() || emailAdresse === "") {
    fejlbesked.textContent = "Indtast venligst en gyldig mailadresse.";

    email.focus();
    return;
  }

  // Fjerner eventuelle fejlbeskeder
  fejlbesked.textContent = "";

//  Går videre til takkesiden


});
