export const educationEntries = [
  {
    institution: "Jadavpur University",
    degree: "M.Tech CSE (AI-DS)",
    dates: "2025 - Present",
    chipLine: ["Artificial Intelligence", "Data Science"],
    description:
      "Postgraduate study in Computer Science and Engineering with a focus on AI and Data Science.",
    featured: true,
  },
  {
    institution: "Netaji Subhash Engineering College (MAKAUT)",
    degree: "B.Tech CSE",
    dates: "Aug 2020 - Jul 2024",
    chipLine: [],
    description: "B.Tech in Computer Science and Engineering.",
    extra: "Grade: E | CGPA: 9.03",
  },
  {
    institution: "Dantan H.S Multipurpose School",
    degree: "WBCHSE",
    dates: "Jun 2017 - Jun 2020",
    chipLine: [],
    description: "Higher secondary education under WBCHSE.",
    extra: "Grade: A+ | Percentage: 88.60%",
  },
  {
    institution: "Dantan High School (H.S)",
    degree: "WBBSE",
    dates: "Jan 2011 - May 2017",
    chipLine: [],
    description: "Secondary education under WBBSE.",
    extra: "Grade: A+ | Percentage: 87.43%",
  },
];

export const featuredProject = {
  tag: "Featured Project",
  title: "NeuroLens AI",
  description: "An advanced medical-imaging system for automated brain tumor detection from MRI scans.",
  bullets: [
    "TensorFlow/Keras preprocessing, augmentation, and training pipelines",
    "Explainable AI with Grad-CAM and patch saliency visualizations",
    "Deployment-ready dashboard for real-time inference",
  ],
  meta: ["Deep Learning", "Medical AI", "Live Demo"],
  links: [
    {
      label: "GitHub Repo",
      href: "https://github.com/archisman-das/Neuro-Lens-AI",
    },
    {
      label: "Live Demo",
      href: "https://huggingface.co/spaces/Tubai01/neurolens-ai",
    },
  ],
};

export const projectCards = [
  {
    id: "02",
    tag: "Medical AI",
    title: "Learning Disorder Intelligence (LDI)",
    description:
      "A multimodal dyslexia screening and assistive-learning platform for multilingual, low-resource educational settings.",
    bullets: [
      "Combines reading fluency analysis, speech therapy scoring, and visual attention testing",
      "Uses a 5-model ensemble: CNN, LSTM, Transformer, ViT, and multimodal attention",
      "Produces explainable risk assessments and downloadable PDF reports",
    ],
    meta: ["Assistive Learning", "Multimodal", "Research + Product"],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/archisman-das/Learning-Disorder-Intelligence",
      },
      {
        label: "Live Demo",
        href: "https://learning-disorder-intelligence.onrender.com/",
        className: "project-link-primary",
      },
    ],
  },
  {
    id: "03",
    tag: "Healthcare AI",
    title: "Rural Mental Health Screening",
    description:
      "An AI-driven screening workflow for rural mental health support and early risk awareness.",
    bullets: [
      "Screening-focused project for practical healthcare use cases",
      "Designed with accessibility and deployment in mind",
      "Supports research-oriented mental health applications",
    ],
    meta: ["Accessibility", "Screening", "Public Health"],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/archisman-das/Rural-Mental-Health-Screening",
      },
    ],
  },
  {
    id: "04",
    tag: "Robust Inference",
    title: "AMRI",
    description:
      "Adaptive Misspecification Robust Inference for settings where model assumptions may not fully hold.",
    bullets: [
      "Focuses on robust statistical inference under misspecification",
      "Research-oriented project centered on methodological reliability",
      "Relevant to applied statistics and inference workflows",
    ],
    meta: ["Statistics", "Method Reliability", "Research"],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/ans036/AMRI-Adaptive-Misspecification-Robust-Inference",
      },
    ],
  },
  {
    id: "05",
    tag: "Product AI",
    title: "LenScope AI",
    description:
      "A project centered on intelligent visual analysis and AI-assisted decision support.",
    bullets: [
      "Built around applied AI workflows",
      "Explores computer vision and model-driven analysis",
      "Positioned for practical, real-world use",
    ],
    meta: ["Visual Analysis", "Decision Support", "Applied AI"],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/archisman-das/LenScope-AI",
      },
    ],
  },
  {
    id: "06",
    tag: "Computer Vision",
    title: "Plant Disease Detection Using CNN",
    description:
      "A CNN-based image classification project focused on detecting plant diseases from visual patterns in plant images.",
    bullets: [
      "Image preprocessing and classification pipeline",
      "Health monitoring and agricultural AI use case",
      "Computer vision for sustainable agriculture",
    ],
    meta: ["Agricultural AI", "Classification", "Computer Vision"],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/archisman-das/Plant-Disease-Detection",
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "AI / ML Foundations",
    tags: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Model Evaluation",
      "Representation Learning",
      "Explainable AI",
    ],
    bullets: [
      "Core learning-based problem solving across applied AI workflows.",
      "Shows up in model selection, training, evaluation, and product-oriented iteration.",
    ],
  },
  {
    title: "Computer Vision",
    tags: ["Computer Vision", "CNNs", "Vision Transformers", "Transfer Learning", "OpenCV", "Grad-CAM"],
    bullets: [
      "Image understanding, visual inference, and explainable inspection.",
      "Visible across medical imaging, plant disease detection, and assistive vision projects.",
    ],
  },
  {
    title: "Programming Languages",
    tags: ["Python", "C", "SQL", "Problem Solving"],
    bullets: [
      "Primary language stack for AI, algorithms, and certification work.",
      "Algorithmic thinking is reinforced through HackerRank credentials, practice, and project implementation.",
    ],
  },
  {
    title: "Frameworks & Libraries",
    tags: ["TensorFlow", "Keras", "PyTorch", "Streamlit", "MediaPipe", "pynput"],
    bullets: [
      "Implementation toolkit for experimentation, demos, and interactive prototypes.",
      "Supports model training, visualization, and user-facing ML applications.",
    ],
  },
  {
    title: "Healthcare & Applied AI",
    tags: ["Medical AI", "Brain Tumor Detection", "Plant Disease Detection", "Assistive Learning", "Multimodal Modeling", "Multimodal Attention"],
    bullets: [
      "Project work focused on practical healthcare and education use cases.",
      "Includes diagnosis-support, screening, and assistive learning applications.",
    ],
  },
  {
    title: "Research & Academic Work",
    tags: ["Paper Reading", "Experiment Design", "Analysis", "Documentation", "Academic Collaboration", "Research Internships"],
    bullets: [
      "Research workflow built around implementation, comparison, and reporting.",
      "Useful for academic collaborations, internships, and industry-facing experimentation.",
    ],
  },
  {
    title: "Tools & Collaboration",
    tags: ["GitHub", "Hugging Face", "Version Control", "Open Source", "Deployment", "Dashboarding"],
    bullets: [
      "Supports public portfolio shipping, repository management, and demo hosting.",
      "Aligned with recruiter visibility, team collaboration, and project sharing.",
    ],
  },
];

export const certificateBadges = [
  {
    label: "Python",
    kind: "python",
    stars: 5,
  },
  {
    label: "C language",
    kind: "c",
    stars: 4,
  },
];

export const certificates = [
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    issued: "Dec 2024",
    credentialId: "6A1076EA7BB2",
    description:
      "HackerRank certificate for Python fundamentals, covering core syntax, data types, control flow, and problem solving basics.",
    image: "/assets/hackerrank-python-basic.png",
    href: "https://www.hackerrank.com/certificates/6a1076ea7bb2",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    issued: "Apr 2021",
    credentialId: "F9BBC652B503",
    description:
      "HackerRank certificate for core problem solving skills, including algorithms, logic building, and coding fundamentals.",
    image: "/assets/hackerrank-problem-solving-basic.png",
    href: "https://downloads.hackerrank.com/certificates/f9bbc652b503",
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/archisman-das-0a2409200/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/archisman-das",
    icon: "github",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/archismandas",
    icon: "hackerrank",
  },
];
