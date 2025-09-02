
import { Button } from "@/components/ui/button";
import profileImage from "../assets/Profile.png";

export default function Home() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden px-4 py-20 sm:py-0">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-6 sm:space-y-8 max-w-6xl mx-auto w-full">
        {/* Profile Image */}
        <div className="animate-fade-in mb-6 sm:mb-8">
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full animate-pulse"></div>
            <img 
              src={profileImage} 
              alt="Caio Dias" 
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/20 to-transparent"></div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent typewriter inline-block">
            Oi, eu sou Caio Dias
          </h1>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-2 px-4">
          <span className="block text-lg sm:text-xl md:text-2xl font-semibold mb-2">Desenvolvedor Full Stack</span>
          <span className="text-gray-400 text-sm sm:text-base md:text-lg block mb-2">Especializado em soluções web escaláveis e modernas</span>
          <span className="text-purple-300 font-semibold text-sm sm:text-base md:text-lg">React.js • NestJS • TypeScript • PostgreSQL</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 animate-fade-in-delay-3 mb-8 sm:mb-16">
          <Button 
            asChild 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            <a href="#projects">Ver Meus Projetos</a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 text-sm sm:text-base"
          >
            <a href="#contact">Entre em Contato</a>
          </Button>
        </div>
        
        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:flex justify-center mt-8 animate-fade-in-delay-3">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
