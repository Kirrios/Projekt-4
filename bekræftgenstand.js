const formular = document.querySelector("#donation-form");
const email = document.querySelector("#email");
const fejlbesked = document.querySelector("#fejlbesked");

formular.addEventListener("submit", function (event) {
  // Forhindrer siden i at genindlæse
  event.preventDefault();

  // Henter brugerens mail
  const emailAdresse = email.value.trim();

  // Kontrollerer om mailen er gyldig
  if (!email.checkValidity() || emailAdresse === "") {
    fejlbesked.textContent = "Indtast venligst en gyldig mailadresse.";

    email.focus();
    return;
  }

  // Fjerner fejlbesked
  fejlbesked.textContent = "";

  // Midlertidig bekræftelse
  alert(
    "Tak for din donation! " +
      "Dette er en demonstration. " +
      "Der er ikke sendt en QR-kode til " +
      emailAdresse +
      ".",
  );
});
