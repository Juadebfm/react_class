import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Secondpage from "./pages/Secondpage";
import Navbar from "./components/Navbar";
import Thirdpage from "./pages/Thirdpage";

const App = () => {
  return (
    <div className="overflow-x-hidden font-mont scroll-smooth">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/second_page" element={<Secondpage />} />
          <Route path="/third_page" element={<Thirdpage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
