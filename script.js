document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const aboutSection = document.querySelector(".about");
  const projectsSection = document.querySelector(".projects");
  const contactSection = document.querySelector(".contact");

  const aboutBtn = document.getElementById("about");
  const projectsBtn = document.getElementById("projects");
  const contactBtn = document.getElementById("contact");

  function showSection(sectionToShow) {
    sections.forEach(section => (section.style.display = "none"));
    sectionToShow.style.display = "grid";
  }

  aboutBtn.addEventListener("click", () => showSection(aboutSection));
  projectsBtn.addEventListener("click", () => showSection(projectsSection));
  contactBtn.addEventListener("click", () => showSection(contactSection));

  document.querySelectorAll(".details-btn").forEach(button => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        button.textContent = "Hide details";
      } else {
        details.style.display = "none";
        button.textContent = "Show details";
      }
    });
  });
});


function validateForm() {
  const name = document.forms["myForm"]["name"].value.trim();
  const email = document.forms["myForm"]["email"].value.trim();
  const message = document.forms["myForm"]["message"].value.trim();

  if (name === "") {
    alert("Please enter your full name.");
    return false;
  }

  if (email === "") {
    alert("Please enter your email address.");
    return false;
  }

  if (message === "") {
    alert("Please enter a message.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

