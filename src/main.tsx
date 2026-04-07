import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.dispatchEvent(new Event('render-event'));
  }, 2000);
});