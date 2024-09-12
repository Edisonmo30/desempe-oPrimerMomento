import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Aside from "./Aside";
import CenterSection from "./CenterSection";
import LeftSection from "./LeftSection"; 
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Aside />
    <CenterSection />
    <LeftSection />
  </StrictMode>
);
