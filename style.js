
const toggle = document.getElementById("themeToggle");
const body = document.body;

body.classList.add("light");

toggle.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
  } else {
    body.classList.replace("dark", "light");
  }
});
