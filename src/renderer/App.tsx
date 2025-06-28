import { createRoot } from "react-dom/client";
import App from "./App";

// App.tsx
import HomePage from "./pages/HomePage";
import FeedPage from "./pages/FeedPage";
import SampleComponent from "./components/SampleComponent";

export default function App() {
  return (
    <div>
      <h1>News React App</h1>
      <HomePage />
      <FeedPage />
      <SampleComponent />
    </div>
  );
}

const root = createRoot(document.body);
root.render(<App />);
