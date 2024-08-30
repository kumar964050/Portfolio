import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// styles
import "./index.css";
import "aos/dist/aos.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
