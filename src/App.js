import LoginPage from "./components/signin.js";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { Categories } from "./pages/Categories.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FetchData from "./components/FetchData";

import {NewsComponent} from "./components/Newscomponent.jsx";


import './App.css';

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/news" element={<NewsComponent />} />
          <Route path="/general" element={<FetchData category="general" />} />
          <Route path="/business" element={<FetchData category="business" />} />
          <Route
            path="/entertainment"
            element={<FetchData category="entertainment" />}
          />
          <Route path="/health" element={<FetchData category="health" />} />
          <Route path="/science" element={<FetchData category="science" />} />
          <Route path="/sports" element={<FetchData category="sports" />} />
          <Route
            path="/technology"
            element={<FetchData category="technology" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
