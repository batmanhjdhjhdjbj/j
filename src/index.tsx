import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cybersecurity } from "./screens/Cybersecurity/Cybersecurity";
import { Landing } from "./screens/Landing/Landing";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/old" element={<Cybersecurity />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
