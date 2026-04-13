import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import QuantumBuzzPage from './component/home/qbpage';
import Header from './component/header';
import Footer from './component/footer';
import Home from './component/pages/home';
import Articles from './component/pages/articles';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/quantum-buzz" element={<QuantumBuzzPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

// In your PreviousPage component, update the button like this:
/*
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => navigate('/quantum-buzz')} 
      className="your-styling-here"
    >
      Go to Quantum Buzz
    </button>
  );
*/