import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Caio Dias
        </h1>
        
        <div className="hidden md:flex gap-2">
          {[
            { href: "#home", label: "Home" },
            { href: "#projects", label: "Projetos" },
            { href: "#about", label: "Sobre" },
            { href: "#contact", label: "Contato" }
          ].map((item) => (
            <Button 
              key={item.href}
              asChild 
              variant="ghost" 
              className="text-white hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 rounded-full px-6"
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </div>
        
        {/* Mobile menu button - simplified for now */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-purple-500/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}
