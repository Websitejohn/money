document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const tickIcon = document.querySelector(".tick-icon");
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.querySelector(".eye-icon i");
  
    // Show tick icon when email input is valid
    emailInput.addEventListener("input", () => {
      if (emailInput.value.includes("@") && emailInput.value.includes(".")) {
        tickIcon.style.display = "block";
      } else {
        tickIcon.style.display = "none";
      }
    });
  
    // Toggle password visibility
    eyeIcon.addEventListener("click", () => {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
      } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
      }
    });
  });
  