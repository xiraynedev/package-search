import { createRoot } from "react-dom/client";
import "./global.scss";
import { Container } from "./components/Container/Container";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(<Container />);
