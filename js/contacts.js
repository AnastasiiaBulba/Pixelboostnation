// Contacts page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initContacts();
});

function initContacts() {
  // Initialize form validation
  initFormValidation();

  // Initialize contact method interactions
  initContactMethodInteractions();
}

function initFormValidation() {
  const form = document.getElementById("contact-form");
  const inputs = form.querySelectorAll("input, select, textarea");

  inputs.forEach((input) => {
    // Add real-time validation
    input.addEventListener("blur", function () {
      validateField(this);
    });

    input.addEventListener("input", function () {
      if (this.classList.contains("error")) {
        validateField(this);
      }
    });
  });
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = "";

  // Remove existing error styling
  field.classList.remove("error");
  removeErrorMessage(field);

  // Validate based on field type
  switch (field.type) {
    case "text":
      if (field.required && !value) {
        isValid = false;
        errorMessage = "This field is required";
      } else if (field.pattern && !new RegExp(field.pattern).test(value)) {
        isValid = false;
        errorMessage = field.title || "Invalid format";
      }
      break;

    case "email":
      if (field.required && !value) {
        isValid = false;
        errorMessage = "This field is required";
      } else if (value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = "Please enter a valid email address";
      }
      break;

    case "textarea":
      if (field.required && !value) {
        isValid = false;
        errorMessage = "This field is required";
      }
      break;
  }

  // Apply validation result
  if (!isValid) {
    field.classList.add("error");
    showErrorMessage(field, errorMessage);
  }

  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showErrorMessage(field, message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;
  errorDiv.style.cssText = `
        color: var(--primary-color);
        font-size: 0.875rem;
        margin-top: 4px;
        animation: fadeInUp 0.3s ease-out;
    `;

  field.parentNode.appendChild(errorDiv);
}

function removeErrorMessage(field) {
  const existingError = field.parentNode.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }
}

function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const submitButton = form.querySelector('button[type="submit"]');

  // Validate all fields
  const inputs = form.querySelectorAll("input, select, textarea");
  let isFormValid = true;

  inputs.forEach((input) => {
    if (!validateField(input)) {
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    return false;
  }

  // Disable submit button and show loading state
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    // Redirect to success page
    window.location.href = "funkin-success.html";
  }, 1500);

  return false;
}

function initContactMethodInteractions() {
  const contactMethods = document.querySelectorAll(".contact-method");

  contactMethods.forEach((method) => {
    // Add click effect
    method.addEventListener("click", function () {
      this.style.transform = "translateX(5px) scale(0.98)";
      setTimeout(() => {
        this.style.transform = "translateX(10px) scale(1)";
      }, 150);
    });

    // Add icon animation
    const icon = method.querySelector(".contact-icon");
    if (icon) {
      method.addEventListener("mouseenter", function () {
        icon.style.transform = "scale(1.1) rotate(5deg)";
      });

      method.addEventListener("mouseleave", function () {
        icon.style.transform = "scale(1) rotate(0deg)";
      });
    }
  });

  // Add map container interactions
  const mapContainer = document.querySelector(".map-container");
  if (mapContainer) {
    mapContainer.addEventListener("mouseenter", function () {
      this.style.boxShadow = "var(--shadow-md)";
    });

    mapContainer.addEventListener("mouseleave", function () {
      this.style.boxShadow = "var(--shadow-sm)";
    });
  }
}

// Add form field focus effects
document.addEventListener("DOMContentLoaded", function () {
  const formFields = document.querySelectorAll(
    ".form-group input, .form-group select, .form-group textarea"
  );

  formFields.forEach((field) => {
    field.addEventListener("focus", function () {
      this.parentNode.style.transform = "scale(1.02)";
    });

    field.addEventListener("blur", function () {
      this.parentNode.style.transform = "scale(1)";
    });
  });
});

// Export functions for global use
window.submitForm = submitForm;
