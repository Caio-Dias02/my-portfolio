import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projetos" },
    { href: "#about", label: "Sobre" },
    { href: "#contact", label: "Contato" }
  ];

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50 dark:border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-400 dark:text-blue-300">
          Caio Dias
        </h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button 
              key={item.href}
              asChild 
              variant="ghost" 
              className="text-white dark:text-gray-200 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300 rounded-full px-4 lg:px-6"
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm"
            className="text-white dark:text-gray-200 hover:bg-blue-500/20 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-slate-700/50 dark:border-gray-700/50">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Button 
                key={item.href}
                asChild 
                variant="ghost" 
                className="w-full text-white dark:text-gray-200 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300 rounded-lg justify-start"
                onClick={handleMobileNavClick}
              >
                <a href={item.href} className="block px-4 py-2">{item.label}</a>
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
