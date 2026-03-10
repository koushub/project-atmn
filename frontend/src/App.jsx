import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import BackgroundChakra from "./components/BackgroundChakra";
import ReadBook from "./pages/ReadBook";
import { useEffect } from "react";

function App() {
  // NEW: Component to handle scrolling to #id
  function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Scroll to top if no hash (moving from /read to /)
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [hash]);

    return null;
  }

  return (
    <Router>
      {/* relative + overflow-hidden prevents scrollbars if chakra is huge */}
      <div className="min-h-screen relative overflow-hidden bg-[#FDFBF7]">
        {/* 1. The Background Layer */}
        <BackgroundChakra />
        <ScrollToHash />
        {/* 2. The Content Layer (Must be z-10 to sit ON TOP) */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/read" element={<ReadBook />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
