import { useEffect } from "react";
import { HashRouter, Link, NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom";
import {
  certificateBadges,
  certificates,
  educationEntries,
  featuredProject,
  projectCards,
  skillGroups,
  socialLinks,
} from "./data/siteContent";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Education", to: "/education" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Research", to: "/research" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
];

const icons = {
  phone: (
    <path d="M6.6 10.8a15.8 15.8 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.6 22.2 1.8 13.4 1.8 2.2 1.8 1.5 2.3 1 3 1h3.8c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.7.6 4 .1.4 0 .9-.2 1.2l-1.8 2.4Z" />
  ),
  mail: (
    <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 3.1V17h16V8.1l-8 5.1-8-5.1Zm15.2-1.1H4.8L12 11.6l7.2-4.6Z" />
  ),
  github: (
    <path d="M12 .5A11.5 11.5 0 0 0 8.4 22.9c.6.1.8-.3.8-.6v-2c-3.4.7-4.1-1.4-4.1-1.4-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 .4 2.5 1 .5 1 1.7 1.4 2.2 1.6.1-.8.5-1.4.9-1.8-2.7-.3-5.6-1.3-5.6-5.8 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3 .9a10.7 10.7 0 0 1 5.4 0c2.1-1.2 3-.9 3-.9.6 1.7.2 2.9.1 3.2.7.9 1.1 1.9 1.1 3.2 0 4.5-2.9 5.5-5.6 5.8.5.4 1 .1 1 1.9v2.8c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
  ),
  linkedin: (
    <path d="M6 9H3v12h3V9Zm-1.5-1.5A1.5 1.5 0 1 0 4.5 4a1.5 1.5 0 0 0 0 3.5ZM21 14.5V21h-3.1v-6c0-1.4-.6-2.4-2-2.4-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1v5.9H10.8s.04-9.5 0-10.5H14v1.5c.4-.8 1.3-1.8 3.1-1.8 2.3 0 3.9 1.5 3.9 4.8Z" />
  ),
  hackerrank: (
    <path d="M8 3.5 4.5 7 8 10.5 11.5 7 8 3.5Zm8 0L12.5 7 16 10.5 19.5 7 16 3.5ZM8 13.5 4.5 17 8 20.5 11.5 17 8 13.5Zm8 0L12.5 17 16 20.5 19.5 17 16 13.5Z" />
  ),
};

function PageIcon({ type }) {
  return (
    <svg className="link-icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

function useRevealObserver() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add("page-ready");
    window.scrollTo(0, 0);

    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(".reveal").forEach((target) => {
        target.classList.add("visible");
      });
      return undefined;
    }

    const targets = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [location.pathname]);
}

function SiteLayout() {
  useRevealObserver();

  return (
    <>
      <div className="noise" />
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <header className="topbar">
        <Link className="brand" to="/">
          Archisman Das
        </Link>
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>© 2026 Archisman Das</p>
      </footer>
    </>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero hero-home reveal">
        <div className="hero-copy">
          <div className="hero-kicker-row">
            <p className="eyebrow">AI / ML Engineer - Research + Product Focused</p>
            <span className="hero-status">Open to full-time roles and research collaborations</span>
          </div>
          <div className="hero-actions">
            <Link className="btn primary" to="/projects">
              View Projects
            </Link>
            <Link className="btn secondary" to="/contact">
              Contact Me
            </Link>
          </div>
          <div className="hero-focus">
            <div className="hero-focus-item">
              <span className="hero-focus-label">Primary lanes</span>
              <strong>Computer Vision, Medical AI, Applied Research</strong>
            </div>
            <div className="hero-focus-item">
              <span className="hero-focus-label">Delivery style</span>
              <strong>Readable code, clean demos, and recruiter-friendly execution</strong>
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <span className="stat-value">CV / AI</span>
              <span className="stat-label">Primary focus</span>
            </div>
            <div className="stat">
              <span className="stat-value">Applied AI</span>
              <span className="stat-label">Projects &amp; demos</span>
            </div>
            <div className="stat">
              <span className="stat-value">Research</span>
              <span className="stat-label">Paper reading</span>
            </div>
            <div className="stat">
              <span className="stat-value">Coding</span>
              <span className="stat-label">HackerRank</span>
            </div>
          </div>
          <div className="hero-strip">
            <span>CNNs</span>
            <span>Vision Transformers</span>
            <span>Transfer Learning</span>
            <span>Open Source</span>
          </div>
          <div className="hero-callout">
            <div className="hero-callout-title">Current focus</div>
            <p>
              Medical image analysis, multimodal learning, research implementation, and building practical AI systems
              with strong evaluation and usable interfaces.
            </p>
            <div className="hero-callout-tags">
              <span>Healthcare AI</span>
              <span>Product Demos</span>
              <span>Research Internships</span>
            </div>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="profile-card">
            <div className="profile-card-ribbon">
              <span className="profile-card-ribbon-dot" />
              <span>Portfolio · Research · Industry</span>
            </div>
            <img
              className="profile-photo"
              src="/assets/profile-photo.jpeg"
              alt="Portrait of Archisman Das"
            />
            <div className="profile-badge">Open to opportunities</div>
            <h2>Archisman Das</h2>
            <p>Focused on applied modeling, concise research communication, and polished product execution.</p>
            <ul className="meta-list">
              <li>M.Tech CSE (AI-DS), Jadavpur University</li>
              <li>AI, deep learning, medical imaging, and assistive learning systems</li>
              <li>Public profile shows 3K followers and 500+ connections</li>
            </ul>
            <div className="profile-links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  <PageIcon type={link.icon} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="section reveal">
        <div className="section-heading">
        </div>
        <div className="about-line">Applied AI, computer vision, and intelligent systems for research and industry.</div>
        <div className="about-grid about-polish-grid">
          <article className="panel resume-panel accent about-copy">
            <div className="resume-topline">
              <div>
                <h3>Profile Overview</h3>
                <div className="resume-meta">
                  <span>AI / ML</span>
                  <span>Product</span>
                  <span>Computer Vision</span>
                </div>
              </div>
            </div>
            <p>
              M.Tech CSE (AI-DS) student with interests in Artificial Intelligence, Deep Learning, Computer Vision,
              and applied system design.
            </p>
            <p>
              Currently exploring learning-based approaches for medical image analysis and intelligent visual systems
              using CNNs, Vision Transformers, and transfer learning techniques.
            </p>
            <p>
              Seeking opportunities in AI engineering, research collaborations, and product-oriented roles that
              value strong technical depth and practical execution.
            </p>
          </article>

          <aside className="panel resume-panel about-side">
            <h3>Key Strengths</h3>
            <div className="resume-meta">
              <span>Python</span>
              <span>PyTorch</span>
              <span>TensorFlow</span>
              <span>OpenCV</span>
              <span>Deployment</span>
            </div>
            <ul className="meta-list about-list">
              <li>Model training, evaluation, and iteration across CNNs, ViTs, and transfer learning workflows</li>
              <li>Data-centric deep learning, representation learning, and experiment-driven model optimization</li>
              <li>Medical AI, plant disease detection, multimodal learning, and applied product implementation</li>
              <li>Open-source exploration, paper reading, and practical prototype development</li>
            </ul>
            <div className="hero-strip about-strip">
              <span>Medical AI</span>
              <span>Product Thinking</span>
              <span>Open Source</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function EducationPage() {
  return (
    <>
      <section className="page-hero reveal">
        <div>
          <p className="eyebrow page-title">Education</p>
        </div>
        <Link className="btn secondary" to="/">
          Back home
        </Link>
      </section>
      <section className="section reveal">
        <div className="education-timeline">
          {educationEntries.map((entry) => (
            <article
              key={`${entry.institution}-${entry.degree}`}
              className={`panel accent resume-panel education-item ${entry.featured ? "resume-feature education-feature" : ""}`}
            >
              <div className="resume-topline">
                <div>
                  <h3>{entry.institution}</h3>
                  <div className="resume-meta">
                    <span>{entry.degree}</span>
                    {entry.dates ? <span>{entry.dates}</span> : null}
                  </div>
                </div>
                {entry.chipLine?.length ? (
                  <div className="badge-strip">
                    {entry.chipLine.map((chip) => (
                      <span key={chip}>{chip}</span>
                    ))}
                  </div>
                ) : null}
              </div>
              <p>{entry.description}</p>
              {entry.extra ? <p>{entry.extra}</p> : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <section className="page-hero reveal">
        <div>
          <p className="eyebrow">Projects</p>
          <h1>Selected work</h1>
          <p className="lede">
            A curated mix of applied AI, computer vision, healthcare tools, and research-oriented systems.
          </p>
        </div>
        <Link className="btn secondary" to="/">
          Back home
        </Link>
      </section>
      <section className="section reveal">
        <div className="project-editorial">
          <article className="panel project-story project-story-feature reveal">
            <div className="project-story-top">
              <div>
                <p className="card-tag">Featured Project</p>
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.description}</p>
              </div>
              <div className="project-story-number">01</div>
            </div>
            <div className="project-story-body">
              <div className="project-story-copy">
                <ul className="card-points">
                  {featuredProject.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="project-story-side">
                <div className="project-story-meta">
                  {featuredProject.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="card-links">
                  {featuredProject.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="project-editorial-grid">
            {projectCards.map((project) => (
              <article key={project.id} className="card project-story">
                <div className="project-story-top">
                  <div>
                    <p className="card-tag">{project.tag}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-story-number">{project.id}</div>
                </div>
                <ul className="card-points">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="project-story-meta">
                  {project.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="card-links">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SkillsPage() {
  return (
    <>
      <section className="page-hero reveal">
        <div>
          <p className="eyebrow">Skills</p>
        </div>
        <Link className="btn secondary" to="/">
          Back home
        </Link>
      </section>
      <section className="section reveal">
        <div className="achievement-grid skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="panel resume-panel">
              <h3>{group.title}</h3>
              <div className="resume-meta">
                {group.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <ul className="meta-list">
                {group.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ResearchPage() {
  return (
    <>
      <section className="page-hero reveal">
        <div>
          <p className="eyebrow">Research &amp; Development</p>
        </div>
        <Link className="btn secondary" to="/">
          Back home
        </Link>
      </section>
      <section className="section reveal">
        <div className="dashboard-grid">
          <article className="panel resume-panel">
            <h3>Research Focus</h3>
            <div className="resume-meta">
              <span>Applied AI/ML</span>
              <span>Computer Vision</span>
              <span>Medical Imaging</span>
            </div>
            <p>
              Applied AI/ML, computer vision, medical imaging, assistive learning, and explainable deep learning.
            </p>
          </article>
          <article className="panel resume-panel quote-panel">
            <h3>Collaboration Interests</h3>
            <div className="resume-meta">
              <span>Research</span>
              <span>Hackathons</span>
              <span>AI Projects</span>
            </div>
            <p className="quote-text">
              Research, hackathons, and implementation-heavy projects in AI/ML, healthcare, education technology,
              and product experimentation.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

function BadgeVisual({ badge }) {
  return (
    <div className={`hex-badge hex-badge-${badge.kind}`}>
      <div className={`hex-badge-icon ${badge.kind === "c" ? "hex-badge-icon-c" : ""}`} aria-hidden="true">
        {badge.kind === "python" ? (
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <path
              d="M8 3h5a3 3 0 0 1 3 3v4h-6.2A2.8 2.8 0 0 1 7 7.2V6a3 3 0 0 1 1-2.2C8.3 3.3 8.6 3 8 3Z"
              fill="currentColor"
            />
            <circle cx="11.4" cy="5.6" r="0.8" fill="#111827" />
            <path
              d="M16 21h-5a3 3 0 0 1-3-3v-4h6.2A2.8 2.8 0 0 1 17 16.8V18a3 3 0 0 1-1 2.2c-.3.5-.6.8 0 .8Z"
              fill="currentColor"
            />
            <circle cx="12.6" cy="18.4" r="0.8" fill="#111827" />
          </svg>
        ) : (
          "C"
        )}
      </div>
      <div className="hex-badge-title">{badge.label}</div>
      <div className="hex-stars" aria-label={`${badge.stars} star badge`}>
        {"★".repeat(badge.stars)}
      </div>
    </div>
  );
}

function CertificationsPage() {
  return (
    <>
      <section className="page-hero reveal">
        <div>
          <p className="eyebrow">Certifications</p>
        </div>
        <Link className="btn secondary" to="/">
          Back home
        </Link>
      </section>
      <section className="section reveal">
        <div className="credentials-grid">
          <article className="panel resume-panel badge-panel resume-wide">
            <div className="resume-topline">
              <div>
                <h3>My Badges</h3>
                <div className="resume-meta">
                  <span>HackerRank</span>
                  <span>Skills badges</span>
                </div>
              </div>
            </div>
            <div className="badge-gallery">
              {certificateBadges.map((badge) => (
                <BadgeVisual key={badge.label} badge={badge} />
              ))}
            </div>
          </article>

          {certificates.map((certificate, index) => (
            <article
              key={certificate.title}
              className={`panel resume-panel certificate-card ${index === 1 ? "certificate-card-alt" : ""}`}
            >
              <div className="certificate-preview">
                <a href={certificate.href} target="_blank" rel="noreferrer">
                  <img src={certificate.image} alt={`${certificate.title} certificate for Archisman Das`} />
                </a>
              </div>
              <div className="certificate-body">
                <div className="resume-topline">
                  <div>
                    <h3>{certificate.title}</h3>
                    <div className="resume-meta">
                      <span>{certificate.issuer}</span>
                      <span>Issued {certificate.issued}</span>
                      <span>Credential ID {certificate.credentialId}</span>
                    </div>
                  </div>
                </div>
                <p>{certificate.description}</p>
                <div className="card-links">
                  <a href={certificate.href} target="_blank" rel="noreferrer">
                    View Certificate
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactIcon({ type }) {
  return <PageIcon type={type} />;
}

function ContactPage() {
  return (
    <>
      <section className="page-hero reveal">
        <div>
          <p className="eyebrow">Contact</p>
        </div>
        <Link className="btn secondary" to="/">
          Back home
        </Link>
      </section>
      <section className="section reveal">
        <div className="dashboard-grid contact-dashboard">
          <article className="panel resume-panel resume-wide">
            <h3>Direct Links</h3>
            <div className="contact-links">
              <a href="tel:+918670118484">
                <ContactIcon type="phone" />
                +91 8670118484
              </a>
              <a href="mailto:das.archisman03@gmail.com">
                <ContactIcon type="mail" />
                das.archisman03@gmail.com
              </a>
              <a href="mailto:archisman.aids.ju@gmail.com">
                <ContactIcon type="mail" />
                archisman.aids.ju@gmail.com
              </a>
              <a href="https://github.com/archisman-das" target="_blank" rel="noreferrer">
                <ContactIcon type="github" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/archisman-das-0a2409200/" target="_blank" rel="noreferrer">
                <ContactIcon type="linkedin" />
                LinkedIn
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <section className="section reveal">
      <article className="panel resume-panel">
        <h3>Page not found</h3>
        <p>The page you were looking for does not exist.</p>
        <div className="card-links">
          <Link to="/" className="btn primary">
            Back home
          </Link>
        </div>
      </article>
    </section>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}
