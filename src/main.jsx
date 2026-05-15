import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Award,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Cpu,
  Folder,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Satellite,
  ScrollText,
  ShieldCheck,
  Globe2,
  Clock3,
  Wrench
} from "lucide-react";
import "./styles.css";

const navItems = [
  { id: "home", label: "/home", icon: Home },
  { id: "experience", label: "/experience", icon: BriefcaseBusiness },
  { id: "projects", label: "/projects", icon: Folder },
  { id: "education", label: "/education", icon: GraduationCap },
  { id: "skills", label: "/skills", icon: Code2 },
  { id: "publications", label: "/publications", icon: ScrollText },
  { id: "certifications", label: "/certifications", icon: Award },
  { id: "more", label: "/more", icon: Wrench }
];

const heroChips = [
  { label: "Neural Networks", icon: Network },
  { label: "Satellite Data", icon: Satellite },
  { label: "Intelligent Systems", icon: Cpu },
  { label: "Team Lead", icon: BriefcaseBusiness }
];

const featuredProjects = [
  {
    title: "Coastline Detection with S2 & NN",
    description: "Deep learning pipeline for shoreline extraction and sea-level rise monitoring using Sentinel-2.",
    tags: ["Python", "PyTorch", "GeoPandas", "S2"],
    visual: "coast"
  },
  {
    title: "ExoMy Rover - Autonomous Stack",
    description: "Autonomous navigation, object detection (ANN) and CI/CD with Docker & GitHub.",
    tags: ["ROS 2", "Python", "Docker", "CI/CD"],
    visual: "rover"
  },
  {
    title: "Vegetable Similarity with ANN",
    description: "Recurrence plots and cosine similarity on full images and grid-based subimages.",
    tags: ["Python", "NumPy", "Scikit-learn", "ANN"],
    visual: "veg"
  }
];

const skillMeters = [
  ["Machine Learning / AI", 92, "Expert"],
  ["Software Architecture", 86, "Advanced"],
  ["Team Leadership", 82, "Advanced"],
  ["Satellite Data", 76, "Advanced"]
];

const experienceGroups = [
  {
    company: "Empedus",
    logo: "empedus",
    items: [
      {
        role: "Team Lead",
        date: "May 2026 - Present",
        duration: "1 mo",
        location: "Greece · Remote · Part-time",
        details: "Team Leadership, Team Management, Delivery Ownership"
      },
      {
        role: "Software Architect",
        date: "Sep 2024 - Present",
        duration: "1 yr 9 mos",
        location: "Greece · Remote · Part-time",
        details: "Software Architecture, ServiceNow, Technical Design"
      },
      {
        role: "Software Engineer",
        date: "Oct 2023 - May 2026",
        duration: "2 yrs 8 mos",
        location: "Greece · Remote · Part-time",
        details: "ITSM, Automation, Platform Implementation"
      }
    ]
  },
  {
    company: "TERRA HORIZON",
    logo: "terra",
    items: [
      {
        role: "Artificial Intelligence Engineer · Team Lead",
        date: "Jan 2025 - Present",
        duration: "1 yr 5 mos",
        location: "Greece · On-site",
        details: "Python, Neural Networks, Climate Services"
      }
    ]
  },
  {
    company: "iPRISM",
    logo: "iprism",
    items: [
      {
        role: "Associate Researcher",
        date: "Oct 2024 - Present",
        duration: "1 yr 8 mos",
        location: "Greece · On-site",
        details: "Research, Artificial Neural Networks, Satellite Data"
      }
    ]
  }
];

const moreProjects = [
  {
    title: "TERRA - Climate & Water Intelligence",
    meta: "European Horizon Project · iPRISM · Ongoing",
    body: "AI-assisted climate services for water contamination assessment, coastal risk, flooding prediction, and vessel activity analysis using satellite imagery and IoT data.",
    href: "https://terra-horizon.eu/"
  },
  {
    title: "Promptera",
    meta: "Self-initiated · AI Developer Platform",
    body: "Prompt engineering and agentic workflow studio with workspaces, version control, multi-model testing, templates, and a VS Code-like interface.",
    href: "https://promtpera.gr"
  },
  {
    title: "IRIS - Wearable AI Assistant",
    meta: "Self-initiated · Assistive Technology",
    body: "Wearable AI vision assistant for blind and visually impaired users with object detection, spatial awareness, and natural speech interaction.",
    href: "https://github.com/DionisisGiannar/Iris-Project"
  },
  {
    title: "answai - Advanced Network Scan With AI",
    meta: "Self-initiated · Security Tooling",
    body: "Modular network scanner with multiple profiles and local AI analysis via Ollama.",
    href: "https://github.com/4l0pix/answai"
  },
  {
    title: "Autonomous Robotic Vehicle (ROS)",
    meta: "Academic · ROS / ROS 2 · Turtlebot3",
    body: "Localization, odometry, trajectory tracking, SLAM, and navigation stack implementation in Gazebo/RViz.",
    href: "https://github.com/DionisisGiannar/Turtlebot3_ROS_Navigation"
  },
  {
    title: "Neural Network Architectures Lab",
    meta: "Academic · Deep Learning",
    body: "CNNs, RNNs, LSTMs, GANs, autoencoders, and encoder-decoder experiments for generation and object detection."
  }
];

const education = [
  ["M.Sc. Artificial Intelligence & Applications", "2025 - 2026 · University of Thessaly · Ongoing", "Advanced AI methods, neural networks, robotics, climate services, and intelligent systems."],
  ["ESA Robotics Workshop - Visiting Student", "Oct 2024 · ESA", "ExoMy rover motion controller, object detection ANN retraining, Docker, and CI/CD inspired by Mars rover missions."],
  ["B.Sc. Computer Science & Telecommunications", "2020 - 2024 · University of Thessaly", "Thesis on coastline and sea-level-rise detection from Sentinel-2 satellite images using neural networks."]
];

const certifications = [
  ["Disaster Risk Monitoring Using Satellite Imagery", "NVIDIA · Remote", "https://learn.nvidia.com/certificates?id=agRnGFOXS_idtkpJ_ZjRwg"],
  ["ESA Robotics Workshop 2024", "European Space Agency · On-site", "https://www.linkedin.com/in/dionisis-giannaropoulos/"],
  ["Agile Master Certified", "iLEARN", "https://badges.innovativelearning.eu/badge/22ffb630-0eb1-4770-99e8-b2adccb5c5b7"],
  ["Self-Driving Robots and ROS 2", "Udemy", "https://www.udemy.com/certificate/UC-f3f94fa4-1018-4e76-8a31-31991a971690/"],
  ["Management and Business Analytics", "Workearly", "https://www.credly.com/badges/61a9ddc9-e8fa-4c28-b216-7c9ef7880d05/linked_in_profile"]
];

const skillBuckets = [
  ["Machine Learning & AI", ["Deep Learning", "Neural Networks", "CNN / RNN / LSTM", "GANs", "Reinforcement Learning", "TensorFlow"]],
  ["Robotics & EO", ["ROS / ROS 2", "Autonomous Navigation", "SLAM", "Satellite Imagery", "Climate / Coastal Modelling"]],
  ["Software Engineering", ["Python", "Java", "JavaScript", "HTML / CSS", "C", "Docker", "GitHub · CI/CD", "ServiceNow"]],
  ["Methods & Workflow", ["Agile / Scrum", "Kanban", "DevOps", "R&D", "Process Improvement"]]
];

const initialTerminalLines = [
  { type: "hint", text: "Type help to see available commands." }
];

const commandHelp = "Commands: help, whoami, focus, experience, projects, education, skills, publications, certifications, more, contact, clear";

const sectionCommands = new Set(["experience", "projects", "education", "skills", "publications", "certifications", "more"]);

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

function XBrandIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
      />
    </svg>
  );
}

function scrollToSection(id, behavior = "smooth") {
  const target = document.getElementById(id);
  const root = document.querySelector(".content-shell");
  if (!target) return;

  if (root) {
    const top = Math.max(0, target.offsetTop - 24);
    if (behavior === "auto") {
      root.scrollTop = top;
      root.scrollTo?.(0, top);
      root.scroll?.(0, top);
    } else {
      root.scrollTo({ top, behavior });
    }
    return;
  }

  target.scrollIntoView({ behavior, block: "start" });
}

function NeuralCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let raf = 0;
    let lastFrame = 0;
    let nodes = [];
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(96, Math.floor((width * height) / 13200));
      nodes = Array.from({ length: count }, (_, index) => {
        const cluster = index % 3;
        const xBase = cluster === 0 ? width * 0.52 : cluster === 1 ? width * 0.68 : width * 0.84;
        const yBase = cluster === 0 ? height * 0.18 : cluster === 1 ? height * 0.25 : height * 0.34;
        return {
          x: xBase + (Math.random() - 0.5) * width * 0.26,
          y: yBase + (Math.random() - 0.5) * height * 0.32,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          r: 0.8 + Math.random() * 1.25
        };
      });
    };

    const draw = (timestamp = 0) => {
      if (!media.matches && timestamp - lastFrame < 33) {
        raf = window.requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;

      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createRadialGradient(width * 0.58, height * 0.08, 0, width * 0.58, height * 0.08, width * 0.78);
      gradient.addColorStop(0, "rgba(40, 29, 100, .34)");
      gradient.addColorStop(0.42, "rgba(9, 13, 36, .78)");
      gradient.addColorStop(1, "rgba(2, 5, 17, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (const node of nodes) {
        if (!media.matches) {
          node.x += node.vx;
          node.y += node.vy;
        }
        if (node.x < -80) node.x = width + 80;
        if (node.x > width + 80) node.x = -80;
        if (node.y < -80) node.y = height + 80;
        if (node.y > height + 80) node.y = -80;
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 145) {
            const alpha = (1 - dist / 145) * 0.26;
            ctx.strokeStyle = `rgba(110, 72, 255, ${alpha})`;
            ctx.lineWidth = 0.55;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 5);
        glow.addColorStop(0, "rgba(116, 70, 255, .86)");
        glow.addColorStop(0.46, "rgba(67, 230, 175, .1)");
        glow.addColorStop(1, "rgba(67, 230, 175, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(114, 74, 255, 0.72)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(0.8, node.r * 0.85), 0, Math.PI * 2);
        ctx.fill();
      }

      if (!media.matches) {
        raf = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas className="neural-canvas" ref={ref} aria-hidden="true" />;
}

function Sidebar({ active, setActive }) {
  return (
    <aside className="sidebar">
      <a className="brand" href="#home" onClick={() => setActive("home")} aria-label="Dionysis Giannaropoulos home">
        <span className="brand-mark" aria-hidden="true">
          <img src={assetUrl("assets/dg-monogram.png")} alt="" />
        </span>
      </a>

      <nav className="side-nav" aria-label="Main navigation">
        {navItems.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            className={`nav-link ${active === id ? "active" : ""}`}
            href={`#${id}`}
            onClick={() => setActive(id)}
          >
            <Icon size={16} strokeWidth={1.9} />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="social-row">
          <a href="https://github.com/DionisisGiannar" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/dionisis-giannaropoulos" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
          <a href="https://x.com/DionisisGiannar" aria-label="X" target="_blank" rel="noreferrer"><XBrandIcon size={15} /></a>
          <a href="mailto:dion.giann@gmail.com" aria-label="Email"><Mail size={17} /></a>
        </div>
      </div>
    </aside>
  );
}

function InteractiveTerminal() {
  const [lines, setLines] = useState(initialTerminalLines);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const runCommand = (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setLines(initialTerminalLines);
      return;
    }

    const nextLines = [{ type: "command", text: `~ ${rawCommand.trim()}` }];

    if (command === "help") {
      nextLines.push({ type: "output", text: commandHelp });
    } else if (command === "whoami") {
      nextLines.push({ type: "output", text: "Dionysis Giannaropoulos - AI researcher, software engineer, and team lead building intelligent systems for real-world impact." });
    } else if (command === "focus") {
      nextLines.push({ type: "output", text: "Machine Learning / AI · Software Architecture · Team Leadership · Satellite Data · Robotics & EO." });
    } else if (sectionCommands.has(command)) {
      document.activeElement?.blur();
      window.location.hash = command;
      nextLines.push({ type: "output", text: `Opening #${command}.` });
    } else if (command === "contact") {
      nextLines.push({
        type: "links",
        text: "Contact:",
        links: [
          ["GitHub", "https://github.com/DionisisGiannar"],
          ["LinkedIn", "https://www.linkedin.com/in/dionisis-giannaropoulos"],
          ["X", "https://x.com/DionisisGiannar"],
          ["Email", "mailto:dion.giann@gmail.com"]
        ]
      });
    } else if (command === "sudo make impact") {
      nextLines.push({ type: "egg", text: "Access granted. Neural nets calibrated, satellite pixels aligned, rover wheels warmed, drums in 7/8. Building impact..." });
    } else if (command.startsWith("sudo")) {
      nextLines.push({ type: "egg", text: "Nice try, but root access is currently busy making tea." });
    } else {
      nextLines.push({ type: "error", text: "command not found. Try help" });
    }

    setLines((current) => [...current, ...nextLines]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const command = input;
    runCommand(command);
    setInput("");
  };

  const handleInputKeyDown = (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const command = input;
    runCommand(command);
    setInput("");
  };

  const handleTerminalClick = (event) => {
    if (event.target.closest("a")) return;
    inputRef.current?.focus();
  };

  return (
    <div className="terminal-card" onClick={handleTerminalClick}>
      <div className="terminal-titlebar">
        <i className="red" />
        <i className="yellow" />
        <i className="green" />
        <span>dion@neuro-shell: ~/about</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {lines.map((line, index) => (
          <p className={`terminal-line ${line.type}`} key={`${line.type}-${index}`}>
            {line.text}
            {line.links && (
              <span className="terminal-links">
                {line.links.map(([label, href]) => (
                  <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" key={label}>{label}</a>
                ))}
              </span>
            )}
          </p>
        ))}
        <form className="terminal-input-row" onSubmit={handleSubmit}>
          <label htmlFor="terminal-input">~</label>
          <input
            ref={inputRef}
            id="terminal-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleInputKeyDown}
            autoComplete="off"
            spellCheck="false"
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-grid" id="home">
      <div className="intro-panel">
        <h1>Dionysis<br />Giannaropoulos</h1>
        <p className="role-line">AI Researcher · Software Engineer · Team Lead</p>
        <div className="chip-grid">
          {heroChips.map(({ label, icon: Icon }) => (
            <span className="skill-chip" key={label}>
              <Icon size={15} />
              {label}
            </span>
          ))}
        </div>
        <SkillMeters />
      </div>

      <div className="terminal-area">
        <InteractiveTerminal />
        <div className="info-strip">
          <span><MapPin size={15} /> Lamia/Athens, Greece</span>
          <span><Globe2 size={15} /> Available Worldwide</span>
          <span><Clock3 size={15} /> UTC+2</span>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ type }) {
  return <div className={`project-visual ${type}`} aria-hidden="true" />;
}

function FeaturedProjects() {
  return (
    <section className="glass-card compact-card" id="featured-projects">
      <CardHeader icon={Code2} title="Featured Projects" action="View all" actionTarget="projects" />
      <div className="featured-list">
        {featuredProjects.map((project) => (
          <article className="project-row" key={project.title}>
            <ProjectVisual type={project.visual} />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillMeters() {
  return (
    <section className="glass-card compact-card" id="technical-skills">
      <CardHeader icon={Code2} title="Top Skills" action="View all" actionTarget="skills" />
      <div className="meter-list">
        {skillMeters.map(([name, value, level]) => (
          <div className="meter-row" key={name}>
            <span>{name}</span>
            <div className="meter-track"><i style={{ width: `${value}%` }} /></div>
            <strong>{level}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function CardHeader({ icon: Icon, title, action, actionTarget = "more" }) {
  return (
    <div className="card-heading">
      <div><Icon size={17} /> <span>{title}</span></div>
      {action && <a href={`#${actionTarget}`}>{action} <span>→</span></a>}
    </div>
  );
}

function CompanyLogo({ type, name }) {
  return (
    <div className={`company-logo ${type}`}>
      {type === "empedus" && <img src={assetUrl("assets/empedus_logo.jpeg")} alt="Empedus" />}
      {type === "terra" && <img src={assetUrl("assets/terra-logo.jpg")} alt="TERRA Horizon" />}
      {type === "iprism" && <img src={assetUrl("assets/iprism-logo.png")} alt="iPRISM" />}
    </div>
  );
}

function Experience() {
  return (
    <section className="glass-card experience-card" id="experience">
      <CardHeader icon={BriefcaseBusiness} title="Experience" />
      <div className="timeline-shell">
        {experienceGroups.map((group) => (
          <div className="timeline-group" key={group.company}>
            <div className="company-cell">
              <CompanyLogo type={group.logo} name={group.company} />
            </div>
            <div className={`role-list ${group.items.length > 1 ? "has-thread" : ""}`}>
              {group.items.map((item, index) => (
                <article className="role-item" key={`${group.company}-${item.role}`}>
                  <span className={`timeline-dot ${item.date.includes("Present") ? "current" : ""}`} />
                  <div className="role-main">
                    <h3>{item.role}</h3>
                    <p>{item.date} · {item.duration}</p>
                    <p className="role-skill"><ShieldCheck size={14} /> {item.details}</p>
                  </div>
                  <div className="role-location">{item.location}</div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ScrollCue() {
  return (
    <div className="scroll-cue" aria-hidden="true">
      <span />
      <div><i /> Scroll to explore more <ChevronDown size={19} /></div>
      <span />
    </div>
  );
}

function SectionedContent() {
  return (
    <div className="section-stack">
      <section className="glass-card content-section" id="projects">
        <CardHeader icon={Folder} title="Projects" />
        <div className="data-grid project-data-grid">
          {moreProjects.map((project) => (
            <article className="data-tile project-tile" key={project.title}>
              <h3>{project.title}</h3>
              <p className="muted">{project.meta}</p>
              <p>{project.body}</p>
              {project.href && (
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                  Open project →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="glass-card content-section" id="education">
        <CardHeader icon={GraduationCap} title="Education" />
        <div className="data-stack">
          {education.map(([title, meta, body]) => (
            <div className="data-tile" key={title}>
              <h3>{title}</h3>
              <p className="muted">{meta}</p>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card content-section" id="skills">
        <CardHeader icon={Code2} title="Skills" />
        <div className="skill-buckets">
          {skillBuckets.map(([title, items]) => (
            <div key={title}>
              <h3>{title}</h3>
              <div className="tag-cloud">
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card content-section compact-section" id="publications">
        <CardHeader icon={ScrollText} title="Publications" />
        <div className="data-tile">
          <h3>Shoreline Changes Detection from Satellite Images Using Deep Learning</h3>
          <p className="muted">AIAI 2025 · IFIP AICT vol. 756 · Springer</p>
          <p>Deep learning-based shoreline detection using Sentinel-2 imagery to analyze coastal change and sea level rise.</p>
          <a href="https://doi.org/10.1007/978-3-031-96228-8_24" target="_blank" rel="noreferrer">Read paper →</a>
        </div>
      </section>

      <section className="glass-card content-section compact-section" id="certifications">
        <CardHeader icon={Award} title="Certifications" />
        <div className="cert-stack">
          {certifications.map(([title, meta, href]) => (
            <article className="cert-row" key={title}>
              <span>{title}</span>
              <small>{meta}</small>
              {href && (
                <a className="cert-link" href={href} target="_blank" rel="noreferrer">
                  View credential →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="glass-card content-section compact-section" id="more">
        <CardHeader icon={Wrench} title="More" />
        <div className="data-tile">
          <h3>Languages & Interests</h3>
          <p>Greek - Native · English - Advanced (ECPE, IELTS 7.5) · German - Intermediate (B1)</p>
          <p>Iaido, Aikido, Tameshigiri, target shooting, drums, and music composition.</p>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      window.requestAnimationFrame(() => {
        scrollToSection(id, "auto");
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  useEffect(() => {
    const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const root = document.querySelector(".content-shell");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { root, rootMargin: "-20% 0px -55% 0px", threshold: [0.08, 0.22, 0.45] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NeuralCanvas />
      <div className="app-frame">
        <Sidebar active={active} setActive={setActive} />
        <div className="shell-title"><span /> dion@neuro-shell: ~</div>
        <main className="content-shell">
          <Hero />
          <ScrollCue />
          <div className="dashboard-grid experience-only">
            {/* <div className="left-stack">
              <FeaturedProjects />
            </div> */}
            <Experience />
          </div>
          <SectionedContent />
        </main>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
