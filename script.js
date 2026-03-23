const currentSection = document.body.dataset.section || document.body.dataset.page;
const navLinks = document.querySelectorAll(".site-nav a");

navLinks.forEach((link) => {
  const targetSection = link.dataset.nav;
  const isActive = targetSection === currentSection;

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

const archiveSearch = document.querySelector("[data-archive-search]");
const archiveEntries = Array.from(document.querySelectorAll(".archive-entry"));
const archiveFilters = Array.from(document.querySelectorAll(".filter-button"));
const archiveStatus = document.querySelector("[data-archive-status]");

if (archiveEntries.length > 0) {
  let activeFilter = "all";

  const applyArchiveFilters = () => {
    const query = archiveSearch ? archiveSearch.value.trim().toLowerCase() : "";
    let visibleCount = 0;

    archiveEntries.forEach((entry) => {
      const kind = entry.dataset.kind || "";
      const haystack = [
        entry.dataset.title || "",
        entry.dataset.keywords || "",
        entry.textContent || ""
      ]
        .join(" ")
        .toLowerCase();

      const matchesFilter = activeFilter === "all" || kind === activeFilter;
      const matchesQuery = query === "" || haystack.includes(query);
      const isVisible = matchesFilter && matchesQuery;

      entry.hidden = !isVisible;

      if (isVisible) {
        visibleCount += 1;
      }
    });

    if (archiveStatus) {
      archiveStatus.textContent =
        visibleCount === 1 ? "1 entry shown" : `${visibleCount} entries shown`;
    }
  };

  archiveFilters.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";

      archiveFilters.forEach((candidate) => {
        candidate.classList.toggle("active", candidate === button);
      });

      applyArchiveFilters();
    });
  });

  if (archiveSearch) {
    archiveSearch.addEventListener("input", applyArchiveFilters);
  }

  applyArchiveFilters();
}
