import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect } from "react";
import { initGA, logPageView } from "./analytics";

const queryClient = new QueryClient();

// --- Component to handle GA page views on route change ---
const GAListener = () => {
  const location = useLocation();

  useEffect(() => {
    initGA(); // initialize GA once
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.hash); // track every route change
  }, [location]);

  return null;
};

// --- Main App ---
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GAListener /> {/* Hook runs here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Analytics /> {/* Vercel Analytics */}
        <SpeedInsights />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
