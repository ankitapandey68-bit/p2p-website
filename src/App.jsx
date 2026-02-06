import { Routes, Route } from "react-router-dom";
import CursorBlocks from "./components/CursorBlocks";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import SolutionsPage from "./pages/SolutionsPage";
import IndustriesPage from "./pages/IndustriesPage";
import ProjectsPage from "./pages/ProjectsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <CursorBlocks />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/terms" element={<TermsConditionsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
