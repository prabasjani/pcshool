import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import AppContextProvider from "./AppContext";
import Course from "./Components/Course";

const App = () => {
  return (
    <>
      <AppContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/:course" element={<Course />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </AppContextProvider>
    </>
  );
};

export default App;
