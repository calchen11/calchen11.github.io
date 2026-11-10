// Fills the page with content from js/content.js. No need to edit this file.
const c = CONTENT;
const $ = (id) => document.getElementById(id);

// Helpers
const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[ch]);
const tags = (items) => `<ul class="tags">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
const list = (items) => `<ul class="bullets">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
const month = (ym) => (ym ? new Date(ym + "-02").toLocaleString("en-US", { month: "short", year: "numeric" }) : "Present");
const newTab = 'target="_blank" rel="noopener"';

const LINKEDIN_ICON = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>';

// Nav resume link + footer year
$("resume-link").href = c.resume;
$("year").textContent = new Date().getFullYear();

// About: name landing + About Me
$("name").textContent = c.name;
$("location").textContent = c.location;
$("about-me").innerHTML = `
  <h2>About Me</h2>
  <p>${esc(c.aboutMe)}</p>`;

// Skills
$("skills-content").innerHTML = c.skills
  .map((g) => `<div class="skill-row"><dt>${esc(g.title)}</dt><dd>${tags(g.items)}</dd></div>`)
  .join("");

// Experience
$("experience-content").innerHTML = c.experience
  .map((r) => `
    <article class="card">
      <div class="row"><h3>${esc(r.title)}</h3><span class="muted">${month(r.start)} – ${month(r.end)}</span></div>
      <p class="muted"><strong>${esc(r.org)}</strong> · ${esc(r.location)}</p>
      ${list(r.bullets)}
    </article>`)
  .join("");

// Projects
$("projects-content").innerHTML = c.projects
  .map((p) => `
    <article class="card project">
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.summary)}</p>
      ${tags(p.tech)}
      <p class="project-links">
        ${p.github ? `<a href="${p.github}" ${newTab}>GitHub →</a>` : ""}
        ${p.writeup ? `<a href="${p.writeup}" ${newTab}>Write-up →</a>` : ""}
      </p>
    </article>`)
  .join("");

// Contact: each item in its own bubble
const ICON = (d) => `<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const bubble = (href, icon, label, value, attrs = "") => `
  <li><a class="bubble" href="${href}" ${attrs}>
    <span class="bubble-icon">${icon}</span>
    <span>${label ? `<span class="bubble-label">${label}</span>` : ""}<span class="bubble-value">${esc(value)}</span></span>
  </a></li>`;
$("contact-content").innerHTML = `
  <h3>Let's Connect!</h3>
  ${c.contact ? `<p>${esc(c.contact)}</p>` : ""}
  <ul class="bubbles">
    ${bubble(`mailto:${c.email}`, ICON('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'), "Email", c.email)}
    ${bubble(`tel:${c.phone.replace(/\D/g, "")}`, ICON('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>'), "Phone", c.phone)}
    ${bubble(c.linkedin, LINKEDIN_ICON, "", "LinkedIn", newTab)}
    ${bubble(c.resume, ICON('<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'), "", "Resume", newTab)}
  </ul>`;

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = $("nav");
const setMenu = (open) => {
  nav.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (ev) => ev.target.closest("a") && setMenu(false));
document.addEventListener("keydown", (ev) => ev.key === "Escape" && setMenu(false));

// Highlight the nav link for the section on screen
const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
const setActive = (id) => navLinks.forEach((a) => a.classList.toggle("active", a.hash === "#" + id));
const observer = new IntersectionObserver(
  (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section").forEach((s) => observer.observe(s));
