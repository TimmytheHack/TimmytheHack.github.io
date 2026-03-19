const page = document.body.dataset.page;
const navLinks = document.querySelectorAll(".site-nav a");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  const isActive =
    (page === "home" && href === "index.html") ||
    (page === "math" && href === "math.html") ||
    (page === "cs" && href === "cs.html");

  if (isActive) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

const lastUpdated = document.getElementById("last-updated");

if (lastUpdated) {
  const now = new Date();
  lastUpdated.textContent = now.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
