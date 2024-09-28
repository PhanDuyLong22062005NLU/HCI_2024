document.addEventListener("DOMContentLoaded", function () {
  const labsDropdown = document.getElementById("labsDropdown");
  const homeSection = document.getElementById("homeSection");

  window.showHome = function () {
    homeSection.classList.toggle("hidden");
  };

  window.toggleLabs = function () {
    labsDropdown.style.display =
      labsDropdown.style.display === "block" ? "none" : "block";
  };
});
