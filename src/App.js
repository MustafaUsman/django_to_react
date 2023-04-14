import LoginPage from "./components/signin.js";
import { Navbar } from "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FetchData } from "./components/FetchData";
import { NewsComponent } from "./components/Newscomponent";
import './App.css';
import { Card } from "./components/Card.jsx";
import { useState } from "react";
import { Home } from "./pages/Home.jsx";
import { Homepost } from "./pages/Homepost.jsx";
import { Contact } from "./pages/Contact.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [category, setCategory] = useState("general");

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onSignOut={setIsAuthenticated} />
      <Card />
      <Routes>
        <Route path="/" element={<Home category={category} />} />
        <Route path="/homepost" element={<Homepost />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={<LoginPage onSuccessfulLogin={setIsAuthenticated} />}
        />
        <Route path="/news" element={<NewsComponent />} />
        <Route
          path="/general"
          element={<FetchData category="general" setCategory={setCategory} />}
        />
        <Route
          path="/business"
          element={<FetchData category="business" setCategory={setCategory} />}
        />
        <Route
          path="/entertainment"
          element={<FetchData category="entertainment" setCategory={setCategory} />}
        />
        <Route
          path="/health"
          element={<FetchData category="health" setCategory={setCategory} />}
        />
        <Route
          path="/science"
          element={<FetchData category="science" setCategory={setCategory} />}
        />
        <Route
          path="/sports"
          element={<FetchData category="sports" setCategory={setCategory} />}
        />
        <Route
          path="/technology"
          element={<FetchData category="technology" setCategory={setCategory} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
