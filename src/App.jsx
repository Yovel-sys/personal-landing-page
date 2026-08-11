import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import {Toaster} from "react-hot-toast";
import {Analytics} from "@vercel/analytics/react";

//import backgroundImage from "./assets/background01.jpeg";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <Toaster position="top-center" reverseOrder={false} />

          {/* אם אני רוצה רקע תמונה */}
          {/* <main
            className="flex-grow bg-no-repeat bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backgroundBlendMode: "overlay",
            }}
          > */}
          {/* הרקע של האפליקציה */}
          <main className="flex-grow bg-[#CBC2DF] px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <Analytics />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
