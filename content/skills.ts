export interface SkillCategory {
  name: string;
  skills: { name: string; core?: boolean; usedIn?: string[] }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Python", core: true },
      { name: "SQL" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    name: "Generative AI",
    skills: [
      { name: "LLMs", core: true },
      { name: "RAG", core: true, usedIn: ["urdu-voice-to-voice-rag-agent", "ai-learning-assistant", "youtube-video-qa-chatbot"] },
      { name: "AI Agents" },
      { name: "Prompt Engineering" },
      { name: "Conversational AI" },
      { name: "Voice AI", usedIn: ["voilo", "livekit-doctor-receptionist", "voice-ai-sales-agent"] },
      { name: "Workflow Automation", usedIn: ["whatsapp-automation-agent"] },
    ],
  },
  {
    name: "Machine Learning & Deep Learning",
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "NLP" },
      { name: "Computer Vision", usedIn: ["driver-drowsiness-detection"] },
      { name: "Transfer Learning" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "FastAPI", core: true, usedIn: ["voilo"] },
      { name: "Flask" },
      { name: "LangChain", core: true, usedIn: ["youtube-video-qa-chatbot"] },
      { name: "LangGraph" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "Scikit-learn" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "FAISS", usedIn: ["ai-learning-assistant"] },
    ],
  },
  {
    name: "Speech & Voice Technologies",
    skills: [
      { name: "STT" },
      { name: "TTS" },
      { name: "Whisper", usedIn: ["urdu-voice-to-voice-rag-agent", "ai-learning-assistant"] },
      { name: "Real-Time Voice Pipelines" },
      { name: "LiveKit", usedIn: ["livekit-doctor-receptionist"] },
      { name: "Vapi", usedIn: ["voice-ai-sales-agent"] },
      { name: "ElevenLabs", usedIn: ["livekit-doctor-receptionist"] },
      { name: "Deepgram", usedIn: ["livekit-doctor-receptionist"] },
    ],
  },
  {
    name: "Databases & Caching",
    skills: [
      { name: "PostgreSQL", core: true, usedIn: ["voilo"] },
      { name: "Redis" },
      { name: "ChromaDB" },
      { name: "Pinecone", usedIn: ["whatsapp-automation-agent"] },
    ],
  },
  {
    name: "APIs & Real-Time Systems",
    skills: [
      { name: "REST APIs" },
      { name: "WebSockets", core: true, usedIn: ["voilo"] },
      { name: "Asynchronous Processing" },
      { name: "API Integration" },
    ],
  },
  {
    name: "Cloud & Deployment",
    skills: [
      { name: "Runpod", usedIn: ["urdu-voice-to-voice-rag-agent"] },
      { name: "Vercel", usedIn: ["urdu-voice-to-voice-rag-agent"] },
      { name: "GPU Deployment" },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Google Colab" },
      { name: "Hugging Face", usedIn: ["urdu-voice-to-voice-rag-agent", "ai-learning-assistant"] },
      { name: "Streamlit", usedIn: ["youtube-video-qa-chatbot"] },
      { name: "n8n", usedIn: ["whatsapp-automation-agent"] },
      { name: "Webhooks" },
      { name: "Airtable", usedIn: ["whatsapp-automation-agent", "voice-ai-sales-agent"] },
      { name: "Langfuse", usedIn: ["livekit-doctor-receptionist"] },
    ],
  },
];

export const homepageSkillsPreview = [
  "Python",
  "FastAPI",
  "LangChain",
  "RAG",
  "LLMs",
  "WebSockets",
  "PostgreSQL",
  "LiveKit",
  "Whisper",
  "Pinecone",
  "FAISS",
  "n8n",
  "TensorFlow",
];
