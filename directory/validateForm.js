function validateForm() {
  const firstnameInput = document.getElementById("firstname");
  const lastnameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const dateInput = document.getElementById("date");
  const required = document.getElementById("required");
  const countrySelect = document.getElementById("country");
  const genderSelect = document.getElementById("gender");
  let isValid = true;

  if (firstnameInput.value.trim() === "") {
    firstnameInput.classList.add("warning");
    firstnameInput.placeholder = "*First name is required*";
    isValid = false;
  } else {
    firstnameInput.classList.remove("warning");
  }
  if (lastnameInput.value.trim() === "") {
    lastnameInput.placeholder = "*Last name is required*";
    lastnameInput.classList.add("warning");
    isValid = false;
  } else {
    lastnameInput.classList.remove("warning");
  }
  if (emailInput.value.trim() === "") {
    emailInput.placeholder = "*Email is required*";
    emailInput.classList.add("warning");
    isValid = false;
  } else {
    emailInput.classList.remove("warning");
  }
  if (passwordInput.value.trim() === "") {
    passwordInput.placeholder = "*Password is required*";
    passwordInput.classList.add("warning");
    isValid = false;
  } else {
    passwordInput.classList.remove("warning");
  }
  const dateValue = dateInput.value;
  const dateParts = dateValue.split("-");
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // Month is zero-based
  const day = parseInt(dateParts[2]);

  const date = new Date(year, month, day);
  if (
    isNaN(date.getTime()) || // Invalid date
    year !== date.getFullYear() ||
    month !== date.getMonth() ||
    day !== date.getDate()
  ) {
    // Invalid date format
    dateInput.value = "";
    dateInput.classList.add("warning");
    required.style.display = "block";
    dateInput.placeholder = "Please enter a valid date";
  } else {
    // Valid date format
    console.log("Date is valid:", date);
    countrySelect.classList.remove("warning");

    // ... do something with the valid date
  }

  if (!countrySelect.value) {
    // No option is selected
    const warningOption = document.createElement("option");
    warningOption.text = "Please select an option";
    countrySelect.classList.add("warning");
    warningOption.disabled = true;
    warningOption.selected = true;
    countrySelect.add(warningOption, 0);
  } else {
    // Option is selected
    console.log("Option selected:", countrySelect.value);
    countrySelect.classList.remove("warning");

    // ... do something with the selected option
  }



  if (!emailInput.checkValidity()) {
    emailInput.placeholder = "Enter a valid email address";
    emailInput.classList.add("warning");
    isValid = false;
  } else {
    emailInput.placeholder = "Enter your email";
    emailInput.classList.remove("warning");
  }
  if (!emailInput.checkValidity()) {
    emailInput.placeholder = "Enter a valid email address";
    emailInput.classList.add("warning");
    isValid = false;
  } else {
    emailInput.placeholder = "Enter your email";
    emailInput.classList.remove("warning");
  }

  return isValid;
}

const form = document.getElementById("reg-form");
const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the form from submitting

  if (validateForm()) {
    window.open("welcome.html");
  }
});
