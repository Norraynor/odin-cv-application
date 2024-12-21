import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CV from "./components/CV.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CV />
	</StrictMode>
);
