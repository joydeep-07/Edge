import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner"; // ✅ import from sonner

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
      <Toaster theme="dark" /> {/* ✅ Enable dark mode */}
    </>
  </StrictMode>
);
