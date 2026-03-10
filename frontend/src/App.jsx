import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BackgroundChakra from "./components/BackgroundChakra";

function App() {
  return (
    <Router>
      {/* relative + overflow-hidden prevents scrollbars if chakra is huge */}
      <div className="min-h-screen relative overflow-hidden bg-[#FDFBF7]">
        {/* 1. The Background Layer */}
        <BackgroundChakra />

        {/* 2. The Content Layer (Must be z-10 to sit ON TOP) */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
