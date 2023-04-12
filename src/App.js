import LoginPage from "./components/signin.js";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { Categories } from "./pages/Categories.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FetchData as General } from "./components/FetchData";
// import './App.css';

const general = "general";
const business = "business";
const entertainment = "entertainment";
const health = "health";
const science = "science";
const sports = "sports";
const technology = "technology";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/general" element={<General category="general" />} />
          <Route path="/business" element={<General category="business" />} />
          <Route
            path="/entertainment"
            element={<General category="entertainment" />}
          />
          <Route path="/health" element={<General category="health" />} />
          <Route path="/science" element={<General category="science" />} />
          <Route path="/sports" element={<General category="sports" />} />
          <Route
            path="/technology"
            element={<General category="technology" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
