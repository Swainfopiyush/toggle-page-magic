
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import PublishingOverview from "./pages/PublishingOverview";
import TestAndRelease from "./pages/TestAndRelease";
import MonitorAndImprove from "./pages/MonitorAndImprove";
import LatestReleases from "./pages/LatestReleases";
import GrowUsers from "./pages/GrowUsers";
import MonetizeWithPlay from "./pages/MonetizeWithPlay";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="publishing-overview" element={<PublishingOverview />} />
            <Route path="test-and-release" element={<TestAndRelease />} />
            <Route path="latest-releases" element={<LatestReleases />} />
            <Route path="monitor-and-improve" element={<MonitorAndImprove />} />
            <Route path="grow-users" element={<GrowUsers />} />
            <Route path="monetize-with-play" element={<MonetizeWithPlay />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
