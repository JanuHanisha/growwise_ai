import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import SmartCropping from "./pages/SmartCropping";
import OrganicAdvisor from "./pages/OrganicAdvisor";
import BudgetPlan from "./pages/BudgetPlan";
import AgroMarket from "./pages/AgroMarket";
import SignIn from "./pages/SignIn";
import VerifyOTP from "./pages/VerifyOTP";
import TopBanner from "./components/TopBanner";

function App() {
  return (
    <Router>
    <TopBanner />
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/smart-cropping" element={<SmartCropping />} />
        <Route path="/organic-advisor" element={<OrganicAdvisor />} />
        <Route path="/budget-plan" element={<BudgetPlan />} />
        <Route path="/agro-market" element={<AgroMarket />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
      </Routes>
    </Router>
  );
}

export default App;
