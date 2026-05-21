import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/cruise/Header";
import { Footer } from "@/components/cruise/Footer";
import { WhatsAppFab } from "@/components/cruise/WhatsAppFab";
import Home from "@/pages/Home";
import Fleet from "@/pages/Fleet";
import Luxury from "@/pages/Luxury";
import VansBuses from "@/pages/VansBuses";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl">Page not found</h2>
        <Link to="/" className="mt-6 inline-block bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded text-xs tracking-[0.2em] uppercase">Go home</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <main className="min-h-screen pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/luxury" element={<Luxury />} />
            <Route path="/vans-buses" element={<VansBuses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFab />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
