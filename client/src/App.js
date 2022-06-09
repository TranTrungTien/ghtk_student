import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImportData from "./pages/importdata";
import ViewData from "./pages/viewdata";

import wallpaper from "./assets/wallpaper.png";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<ImportData />} />
          <Route path="/views" element={<ViewData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
