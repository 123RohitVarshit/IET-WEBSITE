import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

// 1. Import your brand new event page
import AutomationBountyHunt from './pages/bounty';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Your main landing page */}
          <Route path="/" element={<Home />} />
          
          {/* 2. The new route for the Automation event */}
          <Route path="/events/automation-bounty-hunt" element={<AutomationBountyHunt />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;