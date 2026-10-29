
const scene = document.getElementById("scene");
const lampSwitch = document.getElementById("lampSwitch");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");
const email = document.getElementById("email");
const password = document.getElementById("password");

const switchLabel = document.querySelector(".switch-label");

// Start with the lamp turned off
let isOn = false;

function toggleLamp() {
  isOn = !isOn;

  scene.classList.toggle("on", isOn);

  lampSwitch.setAttribute(
    "aria-pressed",
    String(isOn)
  );

  switchLabel.textContent = isOn
    ? "PULL TO TURN OFF"
    : "PULL TO TURN ON";

  message.textContent = "";

  if (isOn) {
    setTimeout(() => {
      if (isOn) email.focus({ preventScroll: true });
    }, 500);
  }
}

lampSwitch.addEventListener("click", toggleLamp);

// Demo form submission
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!isOn) {
    message.textContent = "Please turn on the lamp first.";
    return;
  }

  if (!email.checkValidity() || password.value.trim() === "") {
    message.textContent = "Please enter a valid email and password.";
    return;
  }

  message.textContent =
    "Form validated! Connect a backend to authenticate users.";
});

// Demo links
document.getElementById("forgotLink").addEventListener("click", function (event) {
  event.preventDefault();
  message.textContent = "Password recovery needs to be configured.";
});

document.getElementById("signupLink").addEventListener("click", function (event) {
  event.preventDefault();
  message.textContent = "Create a registration page to sign up.";
});
