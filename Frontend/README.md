# Food Dash

FoodDash AI is a comprehensive full-stack food delivery application, inspired by DoorDash, enhanced with AI-powered voice interaction. It allows users to search for food, place orders, interact via voice commands, and track deliveries in real-time. It includes separate interfaces for customers, restaurants, and delivery personnel.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

🧰 Tech Stack
🌐 Frontend
Framework: React.js (with Vite) + TypeScript
State Management: Zustand + React Query (TanStack)
UI Library: TailwindCSS + ShadcnUI + Framer Motion
Voice Interaction: Web Speech API / Whisper API integration
Authentication: Clerk / JWT with Role-Based Access
🔧 Backend
Framework: Node.js + Express.js
Database: MongoDB (Mongoose) + Redis (for session & order queues)
Real-Time Communication: Socket.IO
AI Integration: OpenAI (GPT-4), Gemini, Whisper
Payment Gateway: Stripe
Media Storage: Cloudinary / Supabase Storage
Deployment: Vercel (Frontend) + Render/Supabase/Node (Backend)
