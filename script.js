const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

requestAnimationFrame(() => {
  document.body.classList.add("page-ready");
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav a").forEach((link) => {
  const target = link.getAttribute("href");
  if (target === currentPage || (currentPage === "" && target === "index.html")) {
    link.classList.add("active");
  }
});

const isInternalLink = (href) => {
  if (!href) {
    return false;
  }
  return !href.startsWith("http") && !href.startsWith("mailto:") && !href.startsWith("tel:");
};

document.querySelectorAll("a[href]").forEach((link) => {
  const href = link.getAttribute("href");
  if (!isInternalLink(href) || link.target === "_blank") {
    return;
  }

  link.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }

    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) {
      return;
    }

    event.preventDefault();
    document.body.classList.add("page-exit");
    window.setTimeout(() => {
      window.location.href = url.href;
    }, 160);
  });
});

const revealTargets = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((target) => observer.observe(target));
