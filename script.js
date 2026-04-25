// =====================
// Services Dropdown (index page)
// =====================
function toggleDropdown() {
  var menu = document.getElementById("servicesMenu");
  if (menu) {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  }
}

// =====================
// Mobile Hamburger Menu
// =====================
function toggleMobileNav() {
  var nav = document.querySelector("header nav");
  var navRight = document.querySelector(".nav-right");
  if (nav) {
    nav.classList.toggle("mobile-open");
  }
  if (navRight) {
    navRight.classList.toggle("mobile-open");
  }
}

// Close the dropdown when clicking anywhere outside it
document.addEventListener("click", function (event) {
  var dropdown = document.querySelector(".dropdown");
  var menu = document.getElementById("servicesMenu");
  if (dropdown && menu && !dropdown.contains(event.target)) {
    menu.classList.remove("open");
  }
});

// =====================
// Image Slider (index page)
// =====================
var currentSlide = 0;
var totalSlides = 3;

function changeSlide() {
  var slides = document.querySelector(".slides");
  if (slides) {
    currentSlide = (currentSlide + 1) % totalSlides;
    var moveBy = currentSlide * (100 / totalSlides);
    slides.style.transform = "translateX(-" + moveBy + "%)";
  }
}

setInterval(changeSlide, 3000);

// =====================
// Login Page Tab Toggle
// =====================
function showTab(tab, clickedBtn) {
  var signinForm = document.getElementById("signin-form");
  var signupForm = document.getElementById("signup-form");
  var allTabs = document.querySelectorAll(".tab-btn");

  // Remove active class from all tabs
  allTabs.forEach(function (btn) {
    btn.classList.remove("active-tab");
  });

  // Add active class to clicked tab
  if (clickedBtn) {
    clickedBtn.classList.add("active-tab");
  }

  // Show the right form
  if (signinForm && signupForm) {
    if (tab === "signin") {
      signinForm.classList.add("active-form");
      signupForm.classList.remove("active-form");
    } else {
      signupForm.classList.add("active-form");
      signinForm.classList.remove("active-form");
    }
  }
}

// Called from the "Sign Up" / "Sign In" text links inside the forms
function switchTab(tab) {
  var allTabs = document.querySelectorAll(".tab-btn");
  allTabs.forEach(function (btn) {
    if (btn.textContent.trim().toLowerCase().replace(" ", "") === tab) {
      showTab(tab, btn);
    }
  });
}
