
import { Button } from "@/components/ui/button";
import profileImage from "../assets/Profile.png";

export default function Home() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen bg-slate-900 dark:bg-gray-900 text-white overflow-hidden px-4 py-20 sm:py-0">
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-6 sm:space-y-8 max-w-6xl mx-auto w-full">
        {/* Profile Image */}
        <div className="animate-fade-in mb-6 sm:mb-8">
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
            <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
            <img 
              src={profileImage} 
              alt="Caio Dias" 
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-blue-600/20"></div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white typewriter inline-block">
            Oi, eu sou Caio Dias
          </h1>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-2 px-4">
          <span className="block text-lg sm:text-xl md:text-2xl font-semibold mb-2">Desenvolvedor Full Stack</span>
          <span className="text-gray-400 text-sm sm:text-base md:text-lg block mb-2">Especializado em soluções web escaláveis e modernas</span>
          <span className="text-blue-300 dark:text-blue-400 font-semibold text-sm sm:text-base md:text-lg">React.js • NestJS • TypeScript • PostgreSQL</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 animate-fade-in-delay-3 mb-8 sm:mb-16">
          <Button 
            asChild 
            size="lg" 
            className="w-full sm:w-auto bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base btn-animate focus-ring"
          >
            <a href="#projects">Ver Meus Projetos</a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 text-sm sm:text-base btn-animate focus-ring"
          >
            <a href="#contact">Entre em Contato</a>
          </Button>
        </div>
        
        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:flex justify-center mt-8 animate-fade-in-delay-3">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
