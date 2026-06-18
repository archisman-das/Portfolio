const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const themeKey = "portfolio-theme";
const themeMeta = document.querySelector('meta[name="theme-color"]');
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");

const safeStorage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
      return true;
    } catch (error) {
      return false;
    }
  },
};

const setTheme = (theme) => {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.style.colorScheme = nextTheme;

  if (themeMeta) {
    themeMeta.setAttribute("content", nextTheme === "light" ? "#f4f7ff" : "#070b14");
  }

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(nextTheme === "light"));
  }

  if (themeLabel) {
    themeLabel.textContent = nextTheme === "light" ? "Dark mode" : "Light mode";
  }

  window.__portfolioTheme = nextTheme;
};

const savedTheme = safeStorage.get(themeKey);
const initialTheme = savedTheme === "light" || savedTheme === "dark"
  ? savedTheme
  : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

setTheme(initialTheme);

window.__portfolioApplyTheme = setTheme;
window.__portfolioToggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  safeStorage.set(themeKey, nextTheme);
  setTheme(nextTheme);
};

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    window.__portfolioToggleTheme();
  });
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
