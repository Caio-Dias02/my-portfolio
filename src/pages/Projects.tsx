import ProjectCard from "../components/ProjectCard";
import { useScrollReveal, useScrollRevealStagger } from "../hooks/useScrollReveal";

import gestaoFinanceiraImg from "../assets/gestao_financeira.jpg";
import muscleUpImg from "../assets/muscle_up.jpg";
import blogPessoalImg from "../assets/blog_pessoal.png";
import portfolioImg from "../assets/meu_portfolio.png";

const projects = [
  {
    title: "Sistema de Gestão Financeira",
    description: "Solução moderna para controle de finanças pessoais, desenvolvida do zero com boas práticas de desenvolvimento, oferecendo dashboard interativo, controle de contas e investimentos, e relatórios detalhados para melhor gestão financeira.",
    tech: ["React 19", "NestJS 11", "TypeScript", "PostgreSQL", "Prisma", "TanStack Query", "Tailwind CSS"],
    link: null,
    image: gestaoFinanceiraImg,
    github: "https://github.com/Caio-Dias02/Gestao-Financeira",
    category: "Full Stack"
  },
  {
    title: "MuscleUp",
    description: "Aplicação web completa para criação, acompanhamento e gerenciamento de planos de treino, oferecendo interface intuitiva e funcionalidades para monitoramento de performance e progresso do usuário.",
    tech: ["React 19", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Prisma", "TanStack Query", "Shadcn/UI"],
    link: null,
    image: muscleUpImg,
    github: "https://github.com/Caio-Dias02/MuscleUp",
    category: "Full Stack"
  },
  {
    title: "Blog Pessoal",
    description: "Aplicação web para compartilhamento de conteúdo pessoal e profissional, permitindo criação, edição e organização de posts, com sistema de autenticação de usuários e interface moderna e responsiva.",
    tech: ["React 18", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "TanStack Query", "Shadcn UI"],
    link: null,
    image: blogPessoalImg,
    github: "https://github.com/Caio-Dias02/blog_pessoal",
    category: "Full Stack"
  },
  {
    title: "Portfólio Pessoal",
    description: "Aplicação web moderna para apresentação de projetos, experiências e habilidades técnicas, desenvolvida com design responsivo, navegação intuitiva e destaque para projetos full stack e de desenvolvimento profissional.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Shadcn/ui"],
    link: "#",
    image: portfolioImg,
    github: "https://github.com/Caio-Dias02/my-portfolio",
    category: "Portfolio"
  }
];

export default function Projects() {
  const titleRef = useScrollReveal();
  const projectsRef = useScrollRevealStagger(150);
  const ctaRef = useScrollReveal();

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Meus Projetos
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-4">
            Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes tecnologias e abordagens de desenvolvimento
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="scroll-reveal">
              <ProjectCard {...project} index={index} />
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="text-center mt-12 sm:mt-16 scroll-reveal px-4">
          <p className="text-gray-400 mb-6 text-sm sm:text-base">Interessado em ver mais projetos?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            Vamos conversar
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
