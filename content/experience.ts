import type { ExperienceEntry } from "@/types/experience";

export const experience: ExperienceEntry[] = [
  {
    role: "Full Stack AI Engineer",
    company: "Entropik Labs",
    companyLogo: "/images/logos/entropik.png",
    location: "Remote",
    start: "Jan 2026",
    end: "Present",
    bullets: [
      "Built and deployed production-grade Generative AI systems including RAG pipelines, voice AI agents, and real-time conversational applications.",
      "Developed FastAPI-based backend services and WebSocket communication systems integrated with LLM-powered workflows.",
      "Worked on GPU-based deployments and production AI systems including voice-to-voice RAG agents and conversational assistants.",
    ],
    stack: ["FastAPI", "WebSockets", "RAG", "GPU Deployment", "LLMs"],
  },
  {
    role: "AI Engineer",
    company: "GulzarSoft",
    companyLogo: "/images/logos/gulzarsoft.jpg",
    location: "Full-Time",
    start: "Sep 2025",
    end: "Jan 2026",
    bullets: [
      "Developed AI applications using LLMs, LangChain, and agent-based architectures for production-ready systems.",
      "Built automation workflows, embedding-based retrieval systems, and machine learning pipelines.",
      "Contributed to backend services and AI integration for multiple client-facing applications.",
    ],
    stack: ["LangChain", "LLMs", "Agent Architectures", "Embeddings"],
    promoted: true,
  },
  {
    role: "AI Engineer Intern",
    company: "GulzarSoft",
    companyLogo: "/images/logos/gulzarsoft.jpg",
    location: "Full-Time",
    start: "Jun 2025",
    end: "Aug 2025",
    bullets: [
      "Worked on machine learning models, data preprocessing, and LangChain-based applications.",
      "Assisted in building RAG prototypes, embeddings workflows, and basic AI automation systems.",
    ],
    stack: ["Machine Learning", "LangChain", "RAG Prototyping"],
  },
];
