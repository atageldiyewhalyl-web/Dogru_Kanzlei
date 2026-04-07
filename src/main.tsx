import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Trigger render-event after a delay to ensure lazy components and SEO hook have finished
setTimeout(() => {
  document.dispatchEvent(new Event('render-event'));
}, 3000);