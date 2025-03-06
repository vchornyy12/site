import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from '@/contexts/AuthContext';
import AuthGuard from '@/components/auth/AuthGuard';

import Index from "./pages/Index";
import Services from "./pages/Services";
import Demo from "./pages/Demo";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Auth from "./pages/Auth";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

// Case Studies
import GlobalmartCaseStudy from "./pages/case-studies/globalmart";
import TechproCaseStudy from "./pages/case-studies/techpro";
import FinsecureCaseStudy from "./pages/case-studies/finsecure";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import PostEditor from "./pages/admin/PostEditor";
import PostCreator from "./pages/admin/PostCreator";

// Services pages
import DevTogetherAssistant from "./pages/services/AIAssistant";
import CRMIntegration from "./pages/services/CRMIntegration";
import CustomerSupport from "./pages/services/CustomerSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/globalmart" element={<GlobalmartCaseStudy />} />
            <Route path="/case-studies/techpro" element={<TechproCaseStudy />} />
            <Route path="/case-studies/finsecure" element={<FinsecureCaseStudy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            
            {/* Admin routes */}
            <Route path="/admin" element={<AuthGuard adminOnly={true}><AdminDashboard /></AuthGuard>} />
            <Route path="/admin/posts/new" element={<AuthGuard adminOnly={true}><PostCreator /></AuthGuard>} />
            <Route path="/admin/posts/edit/:id" element={<AuthGuard adminOnly={true}><PostEditor /></AuthGuard>} />
            
            {/* Service detail pages */}
            <Route path="/services/ai-assistant" element={<DevTogetherAssistant />} />
            <Route path="/services/crm-integration" element={<CRMIntegration />} />
            <Route path="/services/customer-support" element={<CustomerSupport />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
