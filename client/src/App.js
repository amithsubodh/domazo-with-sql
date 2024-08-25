import Home from "./pages/Home";
import ResCards from "./components/ResCards";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResDetail from "./pages/ResDetail";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<ResCards />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/restaurants/:id" element={<ResDetail />} />
          <Route path="/carts" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
