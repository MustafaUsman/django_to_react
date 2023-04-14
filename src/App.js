import LoginPage from "./components/signin.js";
import { Navbar } from "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { FetchData } from "./components/FetchData";
import { NewsComponent } from "./components/Newscomponent";
import './App.css';
import { Card } from "./components/Card.jsx";
import { useState } from "react";
import { Home } from "./pages/Home.jsx";
import { Homepost } from "./pages/Homepost.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
    
    <Router>
      

    {isAuthenticated && <Navbar onSignOut={setIsAuthenticated} />}
      {isAuthenticated && <Card />}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepost" element={<Homepost />} />
        

         
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/login" element={<LoginPage onSuccessfulLogin={setIsAuthenticated} />} />
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