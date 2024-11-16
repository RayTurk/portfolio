import { Routes, Route } from 'react-router-dom';  // Changed this line to remove BrowserRouter
import PortfolioBento from './components/PortfolioBento';
import { About, Projects, Experience, Education, Resume } from './pages';
import GradientBlob from './components/GradientBlob';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <GradientBlob />
      <div className="gradient-overlay" />
      <Routes>
        <Route path="/" element={<PortfolioBento />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;