import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { WorkPage } from "./pages/WorkPage";
import { ClientsPage } from "./pages/ClientsPage";
import { ContactPage } from "./pages/ContactPage";
import { PageType } from "./types";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const handleNavigate = (page: PageType) => {
    navigate(`/${page === "home" ? "" : page}`);
  };

  const renderPage = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
        <Route
          path="/about"
          element={<AboutPage onNavigate={handleNavigate} />}
        />
        <Route
          path="/services"
          element={<ServicesPage onNavigate={handleNavigate} />}
        />
        <Route path="/work" element={<WorkPage />} />
        <Route
          path="/clients"
          element={<ClientsPage onNavigate={handleNavigate} />}
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    );
  };

  const getCurrentPage = (): PageType => {
    const path = window.location.pathname;
    if (path === "/") return "home";
    return (path.substring(1) as PageType) || "home";
  };

  return (
    <div className="min-h-screen bg-black">
      <Header currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
