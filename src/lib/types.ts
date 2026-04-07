export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    portfolio: string;
    summary: string;
    photo?: string;
  };
  experience: Array<{
    id: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    current: boolean;
    bullets: string[];
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
  }>;
  projects: Array<{
    id: string;
    title: string;
    description: string;
    tools: string[];
    impact: string;
  }>;
  skillCategories: {
    technical: string[];
    tools: string[];
    soft: string[];
  };
  skills: string[];
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "Alex Morgan",
    title: "Senior Product Designer",
    email: "alex.morgan@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    website: "alexmorgan.design",
    linkedin: "linkedin.com/in/alexmorgan",
    portfolio: "portfolio.alexmorgan.design",
    summary: "Award-winning product designer with 8+ years of experience creating intuitive, user-centered digital products. Proven track record of leading design teams and delivering high-impact solutions for enterprise and consumer markets.",
    photo: ""
  },
  experience: [
    {
      id: "exp1",
      company: "TechNova Solutions",
      role: "Lead Product Designer",
      startDate: "2020",
      endDate: "Present",
      current: true,
      bullets: [
        "Spearheaded the redesign of the core SaaS platform, increasing user retention by 24%",
        "Managed a team of 4 designers, established design system and component library",
        "Collaborated closely with product managers and engineering leads to define roadmap"
      ]
    },
    {
      id: "exp2",
      company: "Creative Pulse Agency",
      role: "UX/UI Designer",
      startDate: "2016",
      endDate: "2020",
      current: false,
      bullets: [
        "Designed end-to-end experiences for 15+ client projects across fintech and healthcare",
        "Conducted user research, usability testing, and synthesized findings into actionable insights",
        "Reduced onboarding drop-off by 40% for a major fintech client through iterative design"
      ]
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "Rhode Island School of Design",
      degree: "Bachelor of Fine Arts",
      field: "Industrial and Product Design",
      startDate: "2012",
      endDate: "2016"
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "Resume Builder Web App",
      description: "Built a multi-template resume builder with live preview, autosave, and PDF export.",
      tools: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      impact: "Cut resume creation time from hours to minutes for beta users."
    },
    {
      id: "proj2",
      title: "Design System Migration",
      description: "Standardized legacy UI patterns into a reusable design system for web products.",
      tools: ["Figma", "Storybook", "Jira"],
      impact: "Reduced duplicate UI work and improved design consistency across teams."
    }
  ],
  skillCategories: {
    technical: ["UX Research", "Interaction Design", "Accessibility", "Information Architecture"],
    tools: ["Figma", "FigJam", "Jira", "Notion", "Hotjar", "Google Analytics"],
    soft: ["Stakeholder Management", "Cross-functional Collaboration", "Communication", "Mentoring"]
  },
  skills: [
    "User Interface Design",
    "UX Research",
    "Prototyping",
    "Figma",
    "Design Systems",
    "HTML/CSS",
    "Product Strategy"
  ]
};
