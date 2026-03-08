document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    root.setAttribute("data-theme", "dark");
    if (toggleBtn) {
      toggleBtn.textContent = "☀️";
    }
  } else {
    if (toggleBtn) {
      toggleBtn.textContent = "🌙";
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const isDark = root.getAttribute("data-theme") === "dark";

      if (isDark) {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
      } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
      }
    });
  }
});