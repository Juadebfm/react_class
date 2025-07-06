import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Secondpage from "./pages/Secondpage";
import Navbar from "./components/Navbar";
import { DataProvider } from "./context/DataContext";
import { ColorProvider } from "./context/ColorContext";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden font-mont scroll-smooth">
      <DataProvider>
        <ColorProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/second_page" element={<Secondpage />} />
            </Routes>
            <Footer />
          </Router>
        </ColorProvider>
      </DataProvider>
    </div>
  );
};

export default App;
