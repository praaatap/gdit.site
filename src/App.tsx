import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/Landing';
import { DocsLayout } from './pages/Docs';

function App() {
  const location = useLocation();
  const isDocsPage = location.pathname.startsWith('/docs');

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs/*" element={<DocsLayout />} />
      </Routes>
      {!isDocsPage && <Footer />}
    </div>
  );
}

export default App;
