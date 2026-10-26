// Current professional content: CV dated 25 October 2026 + user-supplied planned PhD focus.
// Publisher confirms online 12 July 2026 and citation year 2027 for the AIAI 2026 paper.

export const featuredProjects = [
  {
    title: "Coastline Detection with S2 & NN",
    description:
      "Deep learning pipeline for shoreline extraction and sea-level rise monitoring using Sentinel-2.",
    tags: ["Python", "PyTorch", "GeoPandas", "S2"],
    visual: "coast",
  },
  {
    title: "ExoMy Rover - Autonomous Stack",
    description:
      "Autonomous navigation, object detection (ANN) and CI/CD with Docker & GitHub.",
    tags: ["ROS 2", "Python", "Docker", "CI/CD"],
    visual: "rover",
  },
  {
    title: "Vegetable Similarity with ANN",
    description:
      "Recurrence plots and cosine similarity on full images and grid-based subimages.",
    tags: ["Python", "NumPy", "Scikit-learn", "ANN"],
    visual: "veg",
  },
];

export const experienceGroups = [

  {
    company: "TERRA HORIZON",
    date: "Jan 2024 – Present",
    logo: "terra",
    items: [
      {
        role: "Team Lead",
        date: "Jan 2024 – Present",
        location: "Greece",
        details:
          "Leading the University of Thessaly iPRISM team’s contribution to the EU Horizon-funded TERRA project under the supervision of Dr. Kostas Kolomvatsos, coordinating people, resources and research delivery.",
      },
      {
        role: "Artificial Intelligence Engineer",
        date: "Jan 2024 – Present",
        location: "Greece",
        details:
          "Designing, developing and implementing AI/ML models for environmental monitoring, forecasting and decision-support services.",
      },
    ],
  },
  {
    company: "iPRISM Research Group",
    date: "Oct 2024 – Present",
    logo: "iprism",
    items: [
      {
        role: "Associate Researcher",
        date: "Oct 2024 – Present",
        location: "Greece · On-site",
        details:
          "Contributing to AI research, academic publications and research proposals, including the European Horizon TERRA project, with a focus on deep learning, machine learning and research writing.",
      },
    ],
  },  {
    company: "Empedus",
    date: "Oct 2023 – Present",
    logo: "empedus",
    items: [
      {
        role: "Team Lead",
        date: "May 2026 – Present",
        location: "Greece · Remote · Part-time",
        details:
          "Leading team coordination and delivery ownership across ServiceNow and customer workflow initiatives, including resource allocation, mentoring and technical decision-making.",
      },
      {
        role: "Software Architect",
        date: "Sep 2024 – Present",
        location: "Greece · Remote · Part-time",
        details:
          "Designing solution architecture and technical implementation plans for ITSM, HR and customer-specific applications.",
      },
      {
        role: "Software Engineer",
        date: "Oct 2023 – May 2024",
        location: "Greece · Remote · Part-time",
        details:
          "ServiceNow technical analysis, design and implementation for ITSM, HR and operational workflows.",
      },
    ],
  }
];

export const moreProjects = [
  {
    title: "TERRA Horizon — Earth Observation Intelligence",
    meta: "European Horizon project · UTH / iPRISM · Team Lead & AI Engineer",
    body: "AI/ML research and services for environmental monitoring, forecasting and decision support, combining satellite imagery and environmental data. Leading the University of Thessaly iPRISM team’s contribution under the supervision of Dr. Kostas Kolomvatsos.",
    href: "https://terra-horizon.eu/",
  },
  {
    title: "Promptera",
    meta: "Founder · Prompt engineering & agentic workflows",
    body: "An AI-powered platform for developers, researchers and teams to organise, test and manage prompts and AI agents in one workspace, with prompt editing, multi-model testing, version control and agentic workflow design.",
    href: "https://promptera.io/",
  },
  {
    title: "ΩΜΕΓΑ Spotter",
    meta: "Omega Shooting Club · Applied computer-vision research",
    summary: "Applied computer-vision into camera-based target-shot detection and automated scoring for Omega Shooting Club.",
    body: "Applied computer vision and machine learning to camera-based target-shot detection and automated scoring for Omega Shooting Club. Developed a platform integrating athlete profiles, training histories, and performance analytics to support data-driven coaching and athlete performance evaluation.",
  },
  {
    title: "IRIS — AI Assistant for Blind People",
    meta: "Assistive technology · Prototype",
    body: "An AI vision assistant for blind and visually impaired people, combining real-time object detection, spatial awareness and natural speech interaction to describe surroundings and nearby obstacles.",
    href: "https://github.com/DionisisGiannar/Iris-Project",
  },
  {
    title: "AI Voice-Based Task Logging Agent",
    meta: "Speech recognition & NLP · Prototype",
    body: "An AI agent that recognises spoken task descriptions, extracts structured titles and descriptions, and logs the resulting tasks into an Excel sheet.",
  },
  {
    title: "Neural Network Architectures Lab",
    meta: "Deep learning · Academic",
    body: "Experiments with RNNs, CNNs, GANs, LSTMs, autoencoders and encoder–decoder architectures, including image generation and object detection.",
  },
  {
    title: "Autonomous Robotic Vehicle (ROS)",
    meta: "Robotics · Academic",
    body: "Autonomous wheeled vehicle work with Extended Kalman Filter localisation, odometry, trajectory tracking and motion control, extended with SLAM in Gazebo/RViz simulation.",
    href: "https://github.com/DionisisGiannar/Turtlebot3_ROS_Navigation",
  },
  {
    title: "NeuroSentry",
    meta: "MSc thesis · Neuron dormancy monitoring",
    body: "A multi-signal framework combining activation, gradient and importance metrics with fuzzy risk assessment to identify underutilised neurons and support research into future adaptive neural architectures.",
  },
  {
    title: "answai — Advanced Network Scan With AI",
    meta: "Self-initiated · Security tooling",
    body: "A modular network scanner with multiple profiles and local AI analysis via Ollama.",
    href: "https://github.com/4l0pix/answai",
  },
];

export const education = [
  [
    "M.Sc. Artificial Intelligence and Applications",
    "2025–2026 · University of Thessaly · Grade 9.3/10",
    "Thesis: “Neuron Dormancy Monitoring in Deep Neural Networks”. Developed NeuroSentry, combining activation, gradient and importance metrics with fuzzy risk assessment to monitor neuron dormancy and identify underutilised neurons.",
  ],
  [
    "ESA Robotics Workshop — Visiting Student",
    "Oct–Nov 2024 · European Space Agency",
    "Worked as part of a team on an ExoMy rover: autonomous motion control, ANN retraining for object detection and navigation, and a GitHub/Docker CI/CD pipeline inspired by Mars rover missions.",
  ],
  [
    "B.Sc. Computer Science and Telecommunications",
    "2020–2024 · University of Thessaly · Grade 7.18/10",
    "Thesis: “Detection of Coastline and Sea Level Rise from Satellite Images Using Neural Networks”. Developed and trained a neural network using Copernicus Sentinel-2 imagery to detect coastlines and study coastal fluctuations.",
  ],
  [
    "High School Diploma — Economics and Informatics",
    "2017–2020 · Grade 18.3/20",
    "Studies in Economics and Informatics.",
  ],
];

export const certifications = [
  [
    "Disaster Risk Monitoring Using Satellite Imagery",
    "NVIDIA · 24 Oct 2025",
    "https://learn.nvidia.com/certificates?id=agRnGFOXS_idtkpJ_ZjRwg",
  ],
  [
    "ESA Robotics Workshop 2024",
    "European Space Agency · 28 Oct 2024",
    "https://www.linkedin.com/in/dionisis-giannaropoulos/",
  ],
  [
    "Agile Master Certified AgileLearn",
    "iLEARN · 10 Jun 2024",
    "https://badges.innovativelearning.eu/badge/22ffb630-0eb1-4770-99e8-b2adccb5c5b7",
  ],
  [
    "Self-Driving Robots and ROS 2",
    "Udemy · Nov 2023–Dec 2024",
    "https://www.udemy.com/certificate/UC-f3f94fa4-1018-4e76-8a31-31991a971690/",
  ],
  [
    "Management and Business Analytics",
    "Workearly · 2023",
    "https://www.credly.com/badges/61a9ddc9-e8fa-4c28-b216-7c9ef7880d05/linked_in_profile",
  ],
];

export const skillBuckets = [
  [
    "Machine Learning & AI",
    [
      "Deep Learning",
      "Artificial Neural Networks",
      "TensorFlow",
      "Reinforcement Learning",
      "Regression Algorithms",
      "CNN / RNN / LSTM",
      "GANs",
      "Agentic AI",
    ],
  ],
  [
    "Robotics & Earth Observation",
    [
      "ROS / ROS 2",
      "Autonomous Navigation",
      "Localisation & SLAM",
      "Satellite Imagery",
      "Environmental Monitoring & Forecasting",
    ],
  ],
  [
    "Software Engineering",
    [
      "Python",
      "Java",
      "JavaScript",
      "HTML / CSS",
      "C",
      "Docker",
      "GitHub · CI/CD",
      "ServiceNow",
      "Software Architecture",
    ],
  ],
  [
    "Methods & Delivery",
    [
      "Agile",
      "Waterfall",
      "Scrum",
      "DevOps",
      "Software Craftsmanship",
      "Extreme Programming",
      "Kanban",
      "Research & Development",
    ],
  ],
  [
    "Leadership & Collaboration",
    [
      "Team Leadership",
      "Team Coordination",
      "Delivery Ownership",
      "Team Collaboration",
      "Critical Thinking",
      "Creative Problem-Solving",
      "Attention to Detail",
    ],
  ],
];

export const plannedResearch = {
  title:
    "Adaptive Neural Networks and Knowledge Consolidation in Machine Learning",
  status: "Planned · Awaiting start",
  degree: "PhD research direction",
  body: "Bio-inspired research into how neural networks adapt, retain and consolidate knowledge. Aiming to contribute to the development of adaptive neural networks that can learn continuously, retain knowledge over time, and consolidate information effectively, with applications in lifelong learning and dynamic environments.",
};

export const publications = [
  {
    title:
      "Satellite-Informed Machine Learning for River Contamination Prediction: A Time-Aware LSTM Approach",
    authors: "D. Giannaropoulos, M. Petridis, P. Oikonomou & K. Kolomvatsos",
    meta: "AIAI 2026 / IFIP AICT 795 / Springer / Citation year 2027",
    date: "Online 12 July 2026 · pp. 108–121",
    body: "Satellite-derived environmental data and time-aware LSTM modelling for river contamination prediction and water-quality research.",
    href: "https://doi.org/10.1007/978-3-032-30809-2_8",
    image: "river-intelligence.webp",
    alt: "Dithered river basin with satellite observations",
  },
  {
    title:
      "Shoreline Changes Detection from Satellite Images Using Deep Learning",
    authors: "D. Giannaropoulos & K. Kolomvatsos",
    meta: "AIAI 2025 / IFIP AICT 756 / Springer / 2025",
    date: "pp. 321–334",
    body: "Deep learning-based shoreline detection using Sentinel-2 imagery to study coastal change and sea-level rise.",
    href: "https://doi.org/10.1007/978-3-031-96228-8_24",
    image: "orbital-earth.webp",
    alt: "Pixel engraving of Earth’s curved horizon and satellite observations",
  },
];

export const profileParagraphs = [
  "I’m Dionysis Giannaropoulos, an AI researcher, software architect and team lead working across adaptive neural networks, environmental intelligence and practical software systems.",
  "At iPRISM, I contribute to machine-learning research, academic publications and environmental monitoring services, while coordinating the University of Thessaly team’s TERRA contribution. At Empedus, I lead delivery and design ServiceNow solutions for customer workflows.",
  "Alongside research, I founded Promptera and developed ΩΜΕΓΑ Spotter for computer-vision-assisted sports training.",
];
