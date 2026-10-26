import rabbitHeader from "./assets/rabbit-header.webp?inline";
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Globe2,
  Menu,
  X,
  Plus,
  Minus,
  Linkedin,
  Github,
  FileText,
  Terminal,
  Download,
} from "lucide-react";
import {
  experienceGroups,
  moreProjects,
  education,
  certifications,
  skillBuckets,
  featuredProjects,
  plannedResearch,
  publications,
  profileParagraphs,
} from "./content";

const asset = (name) => `${import.meta.env.BASE_URL}assets/renaissance/${name}`;
const links = {
  email: "mailto:dion.giann@gmail.com",
  github: "https://github.com/DionisisGiannar",
  linkedin: "https://www.linkedin.com/in/dionisis-giannaropoulos",
  x: "https://x.com/DionisisGiannar",
  paper: "https://doi.org/10.1007/978-3-031-96228-8_24",
};
const nav = [
  ["profile", "Profile"],
  ["projects", "Work"],
  ["publications", "Research"],
  ["contact", "Contact"],
];
const utilityNav = [
  ["skills", "Skills"],
  ["certifications", "Certifications"],
  ["more", "Beyond the Work"],
];
const archiveIds = [
  "spotter",
  "education",
  "skills",
  "certifications",
  "more",
  "all-projects",
  "cv",
];

function ExternalLink({ href, children, className = "", ...props }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
function SectionHeading({ number, title, aside, onToggle, expanded }) {
  return (
    <div className="section-heading">
      {onToggle ? (
        <h2 className="section-toggle-heading">
          <button
            className="section-toggle"
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
          >
            <span>
              {number} / {title}
            </span>
            <span className="mobile-only">
              {expanded ? <Minus size={15} /> : <Plus size={15} />}
            </span>
          </button>
        </h2>
      ) : (
        <h2>
          {number} / {title}
        </h2>
      )}
      <span className="heading-rule" />
      {aside ? <div className="section-aside">{aside}</div> : null}
    </div>
  );
}
function Modal({ open, onClose, title, className = "", children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (open && !el.open) {
      el.showModal();
      el.querySelector("[data-autofocus]")?.focus();
    }
    if (!open && el.open) el.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      className={`modal ${className}`}
      aria-label={title}
      onCancel={onClose}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const r = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            onClose();
        }
      }}
    >
      <header className="modal-header">
        <span>{title}</span>
        <button
          type="button"
          className="icon-button"
          onClick={onClose}
          aria-label={`Close ${title}`}
        >
          <X size={20} />
        </button>
      </header>
      {children}
    </dialog>
  );
}
function TerminalPanel({ open, onClose, navigate }) {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState([
    {
      type: "hint",
      text: "Type help to explore. Your curiosity is welcome here.",
    },
  ]);
  const [history, setHistory] = useState([]);
  const historyIndex = useRef(-1);
  const outputRef = useRef(null);
  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight });
  }, [lines]);
  function run(e) {
    e.preventDefault();
    const raw = input.trim();
    const cmd = raw.toLowerCase();
    if (!cmd) return;
    setInput("");
    setHistory((h) => [...h, raw]);
    historyIndex.current = -1;
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    let text;
    if (cmd === "help")
      text =
        "help · whoami · focus · projects · experience · education · skills · publications · certifications · more · contact · clear";
    else if (cmd === "whoami")
      text =
        "Dionysis Giannaropoulos — AI Researcher · Software Architect · Team Lead.";
    else if (cmd === "focus")
      text = `${plannedResearch.title} — planned PhD research, awaiting start. Current practice: machine learning, neuron dormancy monitoring, software architecture and environmental intelligence.`;
    else if (cmd === "hello") text = "Hello, world. Type help to explore.";
    else if (cmd.startsWith("sudo"))
      text = "Root access is currently busy making tea.";
    else if (cmd === "contact") text = "contact";
    else if (
      [
        "home",
        "profile",
        "experience",
        "projects",
        "education",
        "skills",
        "publications",
        "certifications",
        "more",
      ].includes(cmd)
    ) {
      onClose();
      navigate(cmd);
      return;
    } else text = `Command not found: ${raw}. Try help.`;
    setLines((l) => [
      ...l,
      { type: "command", text: `dion@neuro-shell:~ $ ${raw}` },
      { type: text === "contact" ? "contact" : "output", text },
    ]);
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="dion@neuro-shell: ~"
      className="terminal-modal"
    >
      <div className="terminal-output" ref={outputRef} aria-live="polite">
        {lines.map((line, i) => (
          <p key={i} className={line.type}>
            {line.type === "contact" ? (
              <>
                <ExternalLink href={links.email}>Email</ExternalLink> /{" "}
                <ExternalLink href={links.github}>GitHub</ExternalLink> /{" "}
                <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
              </>
            ) : (
              line.text
            )}
          </p>
        ))}
      </div>
      <form onSubmit={run} className="terminal-input">
        <label htmlFor="terminal-command">~ $</label>
        <input
          data-autofocus="true"
          id="terminal-command"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          spellCheck="false"
          aria-label="Terminal command"
          onKeyDown={(e) => {
            if (e.key === "ArrowUp") {
              e.preventDefault();
              historyIndex.current = Math.min(
                historyIndex.current + 1,
                history.length - 1,
              );
              setInput(
                history[history.length - 1 - historyIndex.current] || "",
              );
            }
            if (e.key === "ArrowDown") {
              e.preventDefault();
              historyIndex.current = Math.max(historyIndex.current - 1, -1);
              setInput(
                historyIndex.current < 0
                  ? ""
                  : history[history.length - 1 - historyIndex.current],
              );
            }
          }}
        />
        <button className="icon-button" aria-label="Run command">
          <ArrowRight size={18} />
        </button>
      </form>
      <p className="terminal-footnote">
        ESC TO CLOSE / NO COMMANDS RUN ON YOUR DEVICE
      </p>
    </Modal>
  );
}
function Archive({ open, page, onClose, onPage }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        page === "cv"
          ? "Curriculum vitae / Dionysis Giannaropoulos"
          : "The archive"
      }
      className="archive-modal"
    >
      <nav className="archive-nav" aria-label="Archive sections">
        {[
          ["all-projects", "Projects"],
          ["education", "Education"],
          ["skills", "Skills"],
          ["certifications", "Certifications"],
          ["more", "Beyond the Work"],
          ["cv", "CV"],
        ].map(([id, label]) => (
          <button
            type="button"
            key={id}
            className={id === page ? "selected" : ""}
            onClick={() => onPage(id)}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="archive-content" key={page}>
        {page === "spotter" ? (
          <article>
            <h2>{moreProjects[2].title}</h2>
            <p className="micro">{moreProjects[2].meta}</p>
            <img
              className="archive-project-art"
              src={asset("omega-spotter.webp")}
              alt="Pixel engraving of a sports target and optical camera lens"
              width="1254"
              height="1254"
            />
            <p>{moreProjects[2].body}</p>
            <p>
              Research focus: visual impact analysis / automated scoring /
              longitudinal training data / athlete performance analysis.
            </p>
          </article>
        ) : null}
        {page === "cv" ? (
          <>
            <h2>Dionysis Giannaropoulos</h2>
            <p>AI Researcher · Software Architect · Team Lead</p>
            <p>Lamia/Athens, Greece / dion.giann@gmail.com</p>
            <button
              type="button"
              className="button secondary print-button"
              onClick={() => window.print()}
            >
              Print / Save as PDF <Download size={15} />
            </button>
            {profileParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h3>
              {plannedResearch.degree} — {plannedResearch.status}
            </h3>
            <p>
              <strong>{plannedResearch.title}</strong>
              <br />
              {plannedResearch.body}
            </p>
            <h3>Experience</h3>
            {experienceGroups.map((group) => (
              <article key={group.company}>
                <h3>{group.company}</h3>
                {group.items.map((item) => (
                  <p key={item.role}>
                    <strong>{item.role}</strong>
                    <br />
                    {item.date}
                    <br />
                    {item.details}
                  </p>
                ))}
              </article>
            ))}
          </>
        ) : null}
        {["all-projects", "cv"].includes(page) ? (
          <>
            <h2>Selected & additional projects</h2>
            {moreProjects.map((project) => (
              <article key={project.title}>
                <h3>{project.title}</h3>
                <p className="micro">{project.meta}</p>
                <p>{project.body}</p>
                {project.href ? (
                  <ExternalLink className="text-link" href={project.href}>
                    Open project <ArrowUpRight size={14} />
                  </ExternalLink>
                ) : null}
              </article>
            ))}
            {featuredProjects.map((project) => (
              <article key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="micro">{project.tags.join(" / ")}</p>
              </article>
            ))}
          </>
        ) : null}
        {["education", "cv"].includes(page) ? (
          <>
            <h2>Education</h2>
            {education.map(([title, meta, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p className="micro">{meta}</p>
                <p>{body}</p>
              </article>
            ))}
          </>
        ) : null}
        {["skills", "cv"].includes(page) ? (
          <>
            <h2>Technical practice</h2>
            {skillBuckets.map(([title, items]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{items.join(" / ")}</p>
              </article>
            ))}
          </>
        ) : null}
        {page === "cv" ? (
          <>
            <h2>Publications</h2>
            {publications.map((paper) => (
              <article key={paper.href}>
                <h3>{paper.title}</h3>
                <p>{paper.authors}</p>
                <p className="micro">
                  {paper.meta}
                  <br />
                  {paper.date}
                </p>
                <p>{paper.body}</p>
                <ExternalLink className="text-link" href={paper.href}>
                  Read paper <ArrowUpRight size={14} />
                </ExternalLink>
              </article>
            ))}
          </>
        ) : null}
        {["certifications", "cv"].includes(page) ? (
          <>
            <h2>Certifications</h2>
            {certifications.map(([title, meta, href]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{meta}</p>
                <ExternalLink className="text-link" href={href}>
                  View credential <ArrowUpRight size={14} />
                </ExternalLink>
              </article>
            ))}
          </>
        ) : null}
        {["more", "cv"].includes(page) ? (
          <>
            <h2>Beyond the work</h2>
            <h3>Languages</h3>
            <p>
              Greek — Native · English — Advanced (ECPE, IELTS 7.5) · German —
              Intermediate (B1)
            </p>
            <h3>Interests</h3>
            <p>
              Iaido, Aikido, Tameshigiri, target shooting, drums, and music
              composition.
            </p>
          </>
        ) : null}
      </div>
    </Modal>
  );
}
function BranchedTimeline({ onEducation }) {
  return (
    <div className="timeline branched-timeline">
      <section className="timeline-branch">
        <h3 className="branch-label">Professional practice</h3>
        <div className="branch-nodes">
          {experienceGroups.map((group) => (
            <div className="timeline-item" key={group.company}>
              <span className="timeline-marker" />
              <details>
                <summary>
                  <span className="timeline-title">{group.company}</span>
                  <span className="timeline-role">
                    {group.items
                      .filter((item) => item.date.includes("Present"))
                      .map((item) => item.role)
                      .join(" / ")}
                  </span>
                  <span className="timeline-date">{group.date}</span>
                </summary>
                <div className="timeline-detail role-branches">
                  {group.items.map((item) => (
                    <article className="role-branch" key={item.role}>
                      <h4>{item.role}</h4>
                      <p className="micro">
                        {item.date} · {item.location}
                      </p>
                      <p>{item.details}</p>
                    </article>
                  ))}
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>
      <section className="timeline-branch academic-branch">
        <h3 className="branch-label">Education & research</h3>
        <div className="branch-nodes">
          <div className="timeline-item planned-education">
            <span className="timeline-marker" />
            <details>
              <summary>
                <span className="timeline-title">PhD — Planned</span>
                <span className="timeline-role">{plannedResearch.title}</span>
                <span className="timeline-date">Awaiting start</span>
              </summary>
              <div className="timeline-detail">
                <p>{plannedResearch.body}</p>
                <p className="micro">
                  Planned research direction; doctoral studies have not started.
                </p>
              </div>
            </details>
          </div>
          {[education[0], education[1], education[2]].map(
            ([title, meta, body]) => (
              <div className="timeline-item" key={title}>
                <span className="timeline-marker" />
                <details>
                  <summary>
                    <span className="timeline-title">{title}</span>
                    <span className="timeline-role">
                      {meta.split(" · ").slice(1).join(" · ")}
                    </span>
                    <span className="timeline-date">
                      {meta.split(" · ")[0]}
                    </span>
                  </summary>
                  <div className="timeline-detail">
                    <p>{body}</p>
                    <button
                      type="button"
                      className="text-link"
                      onClick={onEducation}
                    >
                      Full education <ArrowRight size={14} />
                    </button>
                  </div>
                </details>
              </div>
            ),
          )}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [archivePage, setArchivePage] = useState("all-projects");
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [expanded, setExpanded] = useState({
    profile: false,
    publications: false,
    contact: false,
  });
  const [active, setActive] = useState("home");
  const [mobile, setMobile] = useState(
    () => window.matchMedia("(max-width: 700px)").matches,
  );
  const artRef = useRef(null);
  function openArchive(page) {
    setArchivePage(page);
    setArchiveOpen(true);
    setMenuOpen(false);
  }
  function navigate(id) {
    setMenuOpen(false);
    if (archiveIds.includes(id)) {
      openArchive(id);
      return;
    }
    const targetId = id === "experience" ? "profile" : id;
    if (["profile", "publications", "contact"].includes(targetId))
      setExpanded((current) => ({ ...current, [targetId]: true }));
    window.history.replaceState(null, "", `#${targetId}`);
    requestAnimationFrame(() =>
      document.getElementById(targetId)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      }),
    );
  }
  useEffect(() => {
    const viewport = window.matchMedia("(max-width: 700px)");
    const resize = () => setMobile(viewport.matches);
    viewport.addEventListener("change", resize);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    const handleHash = () => {
      const id = window.location.hash.slice(1);
      if (id) navigate(id);
    };
    if (location.hash) handleHash();
    window.addEventListener("hashchange", handleHash);
    const keyHandler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setTerminalOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", keyHandler);
    return () => {
      viewport.removeEventListener("change", resize);
      observer.disconnect();
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    function update() {
      raf = 0;
      const y = window.scrollY;
      artRef.current?.style.setProperty(
        "--parallax",
        `${Math.min(y * 0.065, 30)}px`,
      );
    }
    function scroll() {
      if (!raf && !media.matches && window.innerWidth > 700)
        raf = requestAnimationFrame(update);
    }
    window.addEventListener("scroll", scroll, { passive: true });
    const sections = document.querySelectorAll("main > section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-10% 0px -65% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", scroll);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);
  const navLink = (id, label) => (
    <a
      key={id}
      href={`#${id}`}
      aria-current={active === id ? "location" : undefined}
      onClick={(e) => {
        e.preventDefault();
        navigate(id);
      }}
    >
      {label}
    </a>
  );
  return (
    <>
      <a href="#projects" className="skip-link">
        Skip to selected work
      </a>
      <div className="site-frame">
        <header className="site-header">
          <Plus
            className="header-cross header-cross-left"
            size={12}
            aria-hidden="true"
          />
          <Plus
            className="header-cross header-cross-right"
            size={12}
            aria-hidden="true"
          />
          <button
            type="button"
            className="icon-button mobile-menu-trigger"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={21} strokeWidth={1} />
          </button>
          <div className="header-navigation">
          <nav className="desktop-nav" aria-label="Main navigation">
            <a
              href="#home"
              aria-label="Back to top"
              onClick={(e) => {
                e.preventDefault();
                navigate("home");
              }}
            >
              {/* <ChevronLeft size={14} /> */}
            </a>
            {nav.map(([id, label]) => navLink(id, label))}
            <a
              href="#contact"
              aria-label="Go to contact"
              onClick={(e) => {
                e.preventDefault();
                navigate("contact");
              }}
            >
              {/* <ChevronRight size={14} /> */}
            </a>
          </nav>
            <nav className="utility-nav" aria-label="Profile resources">
              {utilityNav.map(([id, label]) => navLink(id, label))}
            </nav>
          </div>
          <a
            className="emblem-link"
            href="#home"
            aria-label="Dionysis Giannaropoulos — home"
            onClick={(e) => {
              e.preventDefault();
              navigate("home");
            }}
          >
            <img
              className="rabbit-emblem"
              src={rabbitHeader}
              alt="Rabbit and crescent with three family stars"
              width="1216"
              height="1293"
            />
          </a>
          <div className="header-utilities">
            <button
              type="button"
              className="shell-status"
              onClick={() => setTerminalOpen(true)}
              aria-label="Open interactive terminal"
            >
              <span className="status-dot" />
              <span className="shell-desktop">dion@neuro-shell:~</span>
              <span className="shell-mobile">dion@~</span>
            </button>

          </div>
        </header>
        <div className="header-pillars" aria-hidden="true">
          <img
            src={asset("hero-observatory.webp")}
            alt=""
            width="1774"
            height="887"
          />
        </div>
        <main>
          <section id="home" className="hero">
            <div className="hero-art" ref={artRef}>
              <picture>
                <source
                  media="(max-width: 700px)"
                  srcSet={asset("hero-observatory-mobile.webp")}
                />
                <img
                  src={asset("hero-observatory.webp")}
                  alt=""
                  fetchPriority="high"
                  width="1774"
                  height="887"
                />
              </picture>
            </div>
            <p className="hero-marginalia marginalia-left">
              CURIOSITY
              <br />
              BUILDS
              <br />
              BRIDGES
              <br />
              ACROSS
              <br />
              WORLDS
            </p>
            <p className="hero-marginalia marginalia-right">
              ADAPTIVE INTELLIGENCE
              <br />
              ENVIRONMENTAL RESEARCH
              <br />
              APPLIED SYSTEMS
             
            </p>
            <div className="hero-copy">
              <p className="eyebrow">
                AI RESEARCHER · SOFTWARE ARCHITECT · TEAM LEAD
              </p>
              <h1 aria-label="Dionysis Giannaropoulos">
                <span>Dionysis</span>
                <span>Giannaropoulos</span>
              </h1>
              <p className="hero-description">
                Building intelligent systems for a more 
                <br className="desktop-break" /> open and human-centered future.
              </p>
              <div className="hero-actions">
                <a
                  href="#projects"
                  className="button primary"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("projects");
                  }}
                >
                  Explore work <ArrowRight size={15} />
                </a>
                <a
                  href="#contact"
                  className="button secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("contact");
                  }}
                >
                  Get in touch
                </a>
              </div>
            </div>
          </section>
          <section
            className="projects-section content-width"
            id="projects"
            data-reveal
          >
            <SectionHeading
              number="01"
              title="Projects"
              aside={
                <>
                  <span>Selected work</span>
                  <button
                    type="button"
                    onClick={() => openArchive("all-projects")}
                  >
                    [ All projects <ArrowRight size={14} /> ]
                  </button>
                </>
              }
            />
            <div className="project-grid">
              <article className="terra-feature">
                <img
                  className="terra-image"
                  src={asset("coastline.webp")}
                  alt="Dithered satellite interpretation of a river delta and coastline"
                  width="1536"
                  height="1024"
                  loading="lazy"
                />
                <div className="terra-copy">
                  <h3>TERRA Horizon</h3>
                  <p className="project-subtitle">
                    Earth Observation
                    <br /> Intelligence
                  </p>
                  <p className="project-description">
                    AI and satellite data for environmental monitoring,
                    forecasting and decision support.
                    A European Horizon funded project.
                  </p>
                  <ExternalLink
                    href={moreProjects[0].href}
                    className="text-link"
                  >
                    View project <ArrowRight size={16} />
                  </ExternalLink>
                </div>
              </article>
              <div className="secondary-projects">
                <article className="small-project">
                  <ExternalLink
                    href={moreProjects[1].href}
                    className="project-image-link"
                    aria-label="Open Promptera"
                  >
                    <img
                      src={asset("cosmic-atlas.webp")}
                      alt="Pixel engraving of a celestial cloud"
                      loading="lazy"
                      width="1024"
                      height="1024"
                    />
                  </ExternalLink>
                  <div>
                    <h3>
                      <ExternalLink href={moreProjects[1].href}>
                        Promptera
                      </ExternalLink>
                    </h3>
                    <p className="project-subtitle">
                      AI Developer
                      <br /> Platform
                    </p>
                    <p className="project-description">
                      A workspace for prompt engineering, multi-model testing
                      and agentic workflows.
                    </p>
                    <ExternalLink
                      href={moreProjects[1].href}
                      className="project-arrow"
                      aria-label="Open Promptera"
                    >
                      <ArrowRight size={20} />
                    </ExternalLink>
                  </div>
                </article>
                <article className="small-project spotter-project">
                  <button
                    type="button"
                    className="project-image-link"
                    onClick={() => openArchive("spotter")}
                    aria-label="View ΩΜΕΓΑ Spotter details"
                  >
                    <img
                      src={asset("omega-spotter.webp")}
                      alt="Pixel engraving of a scoring target and camera lens"
                      loading="lazy"
                      width="1254"
                      height="1254"
                    />
                  </button>
                  <div>
                    <h3>
                      <button
                        type="button"
                        onClick={() => openArchive("spotter")}
                      >
                        ΩΜΕΓΑ Spotter
                      </button>
                    </h3>
                    <p className="project-subtitle">
                      Computer Vision 
                      <br /> for Target Shooting
                    </p>
                    <p className="project-description">
                      {moreProjects[2].summary}
                    </p>
                    <button
                      type="button"
                      className="project-arrow"
                      onClick={() => openArchive("spotter")}
                      aria-label="View ΩΜΕΓΑ Spotter details"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section
            className={`profile-section content-width expandable ${expanded.profile ? "is-expanded" : ""}`}
            id="profile"
            data-reveal
          >
            <SectionHeading
              number="02"
              title="Profile & experience"
              onToggle={
                mobile
                  ? () => setExpanded((s) => ({ ...s, profile: !s.profile }))
                  : undefined
              }
              expanded={expanded.profile}
              aside="People × Systems × Impact"
            />
            <div className="expandable-body profile-grid">
              <div className="profile-copy">
                {profileParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="research-focus">
                  <p className="micro">CURRENT RESEARCH DIRECTION</p>
                  <h3>{plannedResearch.title}</h3>
                  <span className="planned-label">
                    PhD · {plannedResearch.status}
                  </span>
                  <p>{plannedResearch.body}</p>
                </div>
              </div>
              <BranchedTimeline onEducation={() => openArchive("education")} />
            </div>
          </section>
          <section
            className={`research-section content-width expandable ${expanded.publications ? "is-expanded" : ""}`}
            id="publications"
            data-reveal
          >
            <SectionHeading
              number="03"
              title="Research & publications"
              onToggle={
                mobile
                  ? () =>
                      setExpanded((s) => ({
                        ...s,
                        publications: !s.publications,
                      }))
                  : undefined
              }
              expanded={expanded.publications}
            />
            <div className="expandable-body publication-list">
              {publications.map((paper) => (
                <article className="research-grid" key={paper.href}>
                  <ExternalLink
                    className="research-image"
                    href={paper.href}
                    aria-label={`Read ${paper.title}`}
                  >
                    <img
                      src={asset(paper.image)}
                      alt={paper.alt}
                      loading="lazy"
                      width="1536"
                      height="1024"
                    />
                  </ExternalLink>
                  <div className="research-copy">
                    <h3>{paper.title}</h3>
                    <p className="paper-authors">{paper.authors}</p>
                    <p className="micro">
                      {paper.meta}
                      <br />
                      {paper.date}
                    </p>
                    <p>{paper.body}</p>
                    <ExternalLink className="text-link" href={paper.href}>
                      Read paper <ArrowRight size={15} />
                    </ExternalLink>
                  </div>
                  {/* <img
                    className="research-decoration"
                    src={asset("classical-mind.webp")}
                    alt=""
                    loading="lazy"
                    width="1254"
                    height="1254"
                  /> */}
                </article>
              ))}
            </div>
          </section>
          <section
            className="contact-section content-width"
            id="contact"
            data-reveal
          >
            <SectionHeading number="04" title="Contact" />
            <div className="contact-grid">
              <h2>
                Questions worth exploring alone.<br /> Systems worth building together.
              </h2>
              <div className="contact-middle ">
                <p>
                  I’m open to research collaborations, technical projects and
                  opportunities to work on meaningful problems.
                </p>
                <div className="contact-actions">
                  <a className="button primary" href={links.email}>
                    Get in touch <ArrowRight size={14} />
                  </a>
                  <button
                    className="button secondary"
                    type="button"
                    onClick={() => openArchive("cv")}
                  >
                    View CV <ArrowRight size={14} />
                  </button>
                </div>
              </div>
              <div className="contact-details">
                <a href={links.email}>
                  <Mail size={16} />
                  <span>dion.giann@gmail.com</span>
                </a>
                <span>
                  <MapPin size={16} />
                  Lamia/Athens, Greece
                </span>
                <span>
                  <Globe2 size={16} />
                  Available worldwide
                </span>
              </div>
            </div>
            <div className="mobile-contact-extra">
              <ExternalLink href={links.github}>
                GitHub <ArrowUpRight size={14} />
              </ExternalLink>
              <ExternalLink href={links.linkedin}>
                LinkedIn <ArrowUpRight size={14} />
              </ExternalLink>
            </div>
          </section>
        </main>
        <footer className="site-footer content-width">
          <span>© {new Date().getFullYear()} DIONYSIS GIANNAROPOULOS</span>
          <div>
            <button type="button" onClick={() => openArchive("skills")}>
              Skills
            </button>
            <button type="button" onClick={() => openArchive("certifications")}>
              Certifications
            </button>
            <button type="button" onClick={() => openArchive("more")}>
              Beyond the work
            </button>
            <ExternalLink href={links.github} aria-label="GitHub">
              <Github size={15} />
            </ExternalLink>
            <ExternalLink href={links.linkedin} aria-label="LinkedIn">
              <Linkedin size={15} />
            </ExternalLink>
          </div>
          <button
            type="button"
            className="back-top"
            onClick={() => navigate("home")}
          >
            Back to top <ArrowUpRight size={14} />
          </button>
        </footer>
      </div>
      <Modal
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        title="Navigate"
        className="navigation-modal"
      >
        <nav aria-label="Mobile navigation">
          {[...nav, ...utilityNav].map(([id, label]) => navLink(id, label))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setTerminalOpen(true);
            }}
          >
            Terminal <Terminal size={18} />
          </button>
          <button type="button" onClick={() => openArchive("all-projects")}>
            The archive <FileText size={18} />
          </button>
        </nav>
      </Modal>
      <TerminalPanel
        open={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        navigate={navigate}
      />
      <Archive
        open={archiveOpen}
        page={archivePage}
        onPage={setArchivePage}
        onClose={() => setArchiveOpen(false)}
      />
    </>
  );
}
