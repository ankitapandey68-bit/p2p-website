import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CursorBlocks from "./components/CursorBlocks";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

/* Lazy load pages – initial bundle chhota, fast load */
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const SolutionsPage = lazy(() => import("./pages/SolutionsPage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const DisclaimerPage = lazy(() => import("./pages/DisclaimerPage"));
const TermsConditionsPage = lazy(() => import("./pages/TermsConditionsPage"));

function PageFallback() {
  return <div style={{ minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center" }} />;
}

function App() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", overflowX: "hidden", maxWidth: "100%" }}>
      <ScrollToTop />
      <CursorBlocks />
      <Navbar />
      <main style={{ width: "100%", overflowX: "hidden", maxWidth: "100%" }}>
        <Suspense fallback={<PageFallback />}>
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
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
