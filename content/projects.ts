import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "voilo",
    title: "Voilo",
    tagline: "AI-powered voice language-learning platform",
    category: "voice-ai",
    featured: true,
    stack: ["FastAPI", "OpenAI Realtime API", "WebSockets", "PostgreSQL"],
    problem:
      "Language learners need real-time spoken practice with feedback that adapts to their actual mistakes — not static, one-size-fits-all lessons.",
    solution:
      "Built the backend for a real-time AI language-learning app using FastAPI and WebSocket-based conversational pipelines powered by OpenAI's Realtime models. Added adaptive learning features — vocabulary tracking, mistake memory, and personalized difficulty adjustment — backed by PostgreSQL learning analytics, and deployed the scalable backend infrastructure behind a cross-platform mobile app.",
    techStack: [
      { name: "FastAPI", why: "Async-first backend to keep pace with real-time voice traffic." },
      { name: "OpenAI Realtime API", why: "Low-latency speech-to-speech conversation for live practice sessions." },
      { name: "WebSockets", why: "Persistent bidirectional connection for streaming conversational audio." },
      { name: "PostgreSQL", why: "Stores per-user vocabulary progress and mistake history for adaptive difficulty." },
    ],
    hasScreenshots: false,
  },
  {
    slug: "urdu-voice-to-voice-rag-agent",
    title: "Urdu Voice-to-Voice RAG Agent",
    tagline: "End-to-end Urdu conversational AI assistant",
    category: "rag",
    featured: true,
    stack: ["Hugging Face (Whisper, LLM, TTS)", "RAG", "Runpod", "Vercel"],
    problem:
      "Most voice-AI tooling is built and tuned for English first, leaving Urdu speakers underserved by conversational assistants.",
    solution:
      "Built an end-to-end Urdu voice-to-voice conversational agent using open-source STT, LLM, and TTS models from Hugging Face, with a RAG pipeline for context-aware responses. Deployed inference on Runpod GPUs with the frontend hosted on Vercel.",
    techStack: [
      { name: "Whisper (Hugging Face)", why: "Open-source speech-to-text with usable Urdu transcription." },
      { name: "RAG pipeline", why: "Grounds responses in retrieved context instead of relying on the LLM alone." },
      { name: "Runpod", why: "Cost-efficient GPU inference for the STT/LLM/TTS pipeline." },
      { name: "Vercel", why: "Hosts the frontend interface for the assistant." },
    ],
    hasScreenshots: false,
  },
  {
    slug: "livekit-doctor-receptionist",
    title: "LiveKit Doctor Receptionist",
    tagline: "Real-time AI receptionist with full observability",
    category: "voice-ai",
    featured: true,
    stack: ["LiveKit", "Gemini", "ElevenLabs", "Deepgram", "Langfuse"],
    problem:
      "Medical front desks need a receptionist that can hold a natural phone conversation, manage appointments, and stay reliable — with every interaction traceable for debugging and quality review.",
    solution:
      "Built a real-time AI receptionist using LiveKit agents, Google Gemini for reasoning, ElevenLabs for TTS, and Deepgram for STT. Integrated Langfuse for tracing, logging, and prompt evaluation. The agent manages appointments, refreshes patient data, responds conversationally, and handles fallback logic with full traceability.",
    techStack: [
      { name: "LiveKit", why: "Real-time audio transport and agent orchestration for the call." },
      { name: "Google Gemini", why: "Conversational reasoning and appointment-handling logic." },
      { name: "ElevenLabs", why: "Natural-sounding text-to-speech for the receptionist's voice." },
      { name: "Deepgram", why: "Low-latency speech-to-text for caller input." },
      { name: "Langfuse", why: "Tracing, logging, and prompt evaluation for production observability." },
    ],
    links: { github: "https://github.com/Waleed-coder079/livekit_doctor_receponist" },
    hasScreenshots: false,
  },
  {
    slug: "whatsapp-automation-agent",
    title: "WhatsApp Automation Agent",
    tagline: "n8n + Unipile + Airtable multi-agent router",
    category: "automation",
    featured: false,
    stack: ["n8n", "Unipile", "Airtable", "Pinecone", "LLM classifier", "Webhooks"],
    problem:
      "Incoming WhatsApp messages span order tracking, product questions, technical support, and billing — routing all of that to one generic bot produces poor answers.",
    solution:
      "Built an end-to-end WhatsApp automation system using Unipile and n8n webhooks with an LLM-based classifier that routes each message to a specialized agent: an Order Tracking agent (Airtable), a Product Info agent (Pinecone vector search), a Technical Support agent (automated email escalation), and a Billing agent (structured responses).",
    techStack: [
      { name: "n8n", why: "Workflow orchestration connecting WhatsApp, the classifier, and each specialized agent." },
      { name: "LLM classifier", why: "Routes each incoming message to the correct specialized agent." },
      { name: "Airtable", why: "Source of truth for order status lookups." },
      { name: "Pinecone", why: "Vector search over product knowledge for the Product Info agent." },
    ],
    hasScreenshots: false,
  },
  {
    slug: "voice-ai-sales-agent",
    title: "Voice AI Sales Agent",
    tagline: "Vapi-powered voice agent for e-commerce",
    category: "voice-ai",
    featured: false,
    stack: ["Vapi", "Airtable", "Voice AI"],
    problem:
      "E-commerce stores lose sales when shoppers can't get a quick, conversational answer about products, FAQs, or availability.",
    solution:
      "Developed a Vapi-powered voice agent for an e-commerce store, using Airtable as a dynamic product knowledge base for real-time conversational product discovery, FAQs, and buying assistance at scale.",
    techStack: [
      { name: "Vapi", why: "Voice agent platform handling the live conversation." },
      { name: "Airtable", why: "Dynamic, easily-updated product knowledge base." },
    ],
    hasScreenshots: false,
  },
  {
    slug: "ai-learning-assistant",
    title: "AI-Powered Learning Assistant",
    tagline: "Final year project — video summarization + book recommender",
    category: "rag",
    featured: false,
    stack: ["Whisper", "Pegasus", "DeepSeek", "FAISS", "Hugging Face"],
    problem:
      "Students spend hours re-watching lecture videos and searching for reading material that matches what they actually need to study.",
    solution:
      "Developed a video summarization and notes-generation system using Hugging Face models (Whisper, Pegasus, DeepSeek), plus a transformer-based book recommender using FAISS for personalized study assistance.",
    techStack: [
      { name: "Whisper", why: "Transcribes lecture video audio as the first step of summarization." },
      { name: "Pegasus", why: "Abstractive summarization model condensing transcripts into notes." },
      { name: "FAISS", why: "Similarity search powering the personalized book recommender." },
    ],
    hasScreenshots: false,
  },
  {
    slug: "youtube-video-qa-chatbot",
    title: "YouTube Video Q&A Chatbot",
    tagline: "Multilingual transcript RAG chatbot",
    category: "rag",
    featured: false,
    stack: ["LangChain", "LLaMA 3.3", "MiniLM", "Groq", "Streamlit"],
    problem:
      "Long YouTube videos are hard to search — viewers want direct answers, not another full watch-through.",
    solution:
      "Built a Streamlit chatbot that extracts multilingual YouTube transcripts, embeds them with MiniLM, and retrieves context-grounded answers using a Groq-hosted LLaMA 3.3 70B RAG pipeline.",
    techStack: [
      { name: "MiniLM", why: "Lightweight embedding model for transcript chunks." },
      { name: "Groq (LLaMA 3.3 70B)", why: "Fast inference for low-latency RAG answers." },
      { name: "Streamlit", why: "Quick interactive UI for the chatbot." },
    ],
    links: { github: "https://github.com/Waleed-coder079/youtube-rag-chatbot" },
    hasScreenshots: false,
  },
  {
    slug: "driver-drowsiness-detection",
    title: "Driver Drowsiness Detection",
    tagline: "Real-time computer vision safety system",
    category: "computer-vision",
    featured: false,
    stack: ["OpenCV", "YOLO", "Python"],
    problem:
      "Drowsy driving is a preventable cause of accidents, but needs to be detected in real time from a driver-facing camera to be useful.",
    solution:
      "Created a real-time system using Eye Aspect Ratio (EAR), facial landmarks, OpenCV, and YOLO to detect driver drowsiness and trigger alerts.",
    techStack: [
      { name: "OpenCV", why: "Facial landmark detection and frame-by-frame video processing." },
      { name: "YOLO", why: "Real-time object detection feeding the drowsiness signal." },
    ],
    hasScreenshots: false,
  },
];

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
