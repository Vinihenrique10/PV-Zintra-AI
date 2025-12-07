
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { LandingPage } from './pages/LandingPage';
import { ThankYou } from './pages/ThankYou';

function App() {
  return (
    <Router>
      <SpeedInsights />
      <Analytics />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Thank You Pages */}
        <Route
          path="/thank-you-basic-monthly"
          element={<ThankYou planName="Basic Monthly Plan" />}
        />
        <Route
          path="/thank-you-basic-annual"
          element={<ThankYou planName="Basic Annual Plan" />}
        />
        <Route
          path="/thank-you-pro-monthly"
          element={<ThankYou planName="Pro Monthly Plan" />}
        />
        <Route
          path="/thank-you-pro-annual"
          element={<ThankYou planName="Pro Annual Plan" />}
        />
      </Routes>
    </Router>
  );
}

export default App;

