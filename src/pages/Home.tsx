
import { Button } from "@/components/ui/button";
import profileImage from "../assets/Profile.png";

export default function Home() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Profile Image */}
        <div className="animate-fade-in mb-8">
          <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48">
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
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            Oi, eu sou
          </h1>
          <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-delay">
            Caio Dias
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
          Desenvolvedor Full Stack
          <br />
          <span className="text-gray-400 text-lg">Especializado em soluções web escaláveis e modernas</span>
          <br />
          <span className="text-purple-300 font-semibold">React.js • NestJS • TypeScript • PostgreSQL</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-delay-3">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <a href="#projects">Ver Meus Projetos</a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            <a href="#contact">Entre em Contato</a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
