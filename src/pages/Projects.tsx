import ProjectCard from "../components/ProjectCard";
import { useScrollReveal, useScrollRevealStagger } from "../hooks/useScrollReveal";

const projects = [
  {
    title: "Sistema de BI Escalável",
    description: "Aplicação web para análise de dados empresariais com dashboard interativo, relatórios automatizados e integração com múltiplas fontes de dados.",
    tech: ["React.js", "NestJS", "TypeScript", "PostgreSQL"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    github: "https://github.com/Caio-Dias02",
    category: "Business Intelligence"
  },
  {
    title: "API RESTful com NestJS",
    description: "API robusta e escalável desenvolvida com NestJS, TypeScript e PostgreSQL. Implementa autenticação JWT, validação de dados e documentação Swagger.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Docker"],
    link: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    github: "https://github.com/Caio-Dias02",
    category: "Backend"
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard avançado para análise de dados com visualizações interativas, filtros dinâmicos e exportação de relatórios.",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    github: "https://github.com/Caio-Dias02",
    category: "Data Viz"
  },
  {
    title: "App de Produtividade",
    description: "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em equipe, notificações e sincronização em tempo real.",
    tech: ["React Native", "Firebase", "Redux", "Socket.io"],
    link: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    github: "https://github.com/Caio-Dias02",
    category: "Mobile"
  },
  {
    title: "Portfolio Profissional",
    description: "Meu portfólio moderno e responsivo desenvolvido com React.js, TypeScript, Tailwind CSS e shadcn/ui, com foco em performance e UX.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    link: "#",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    github: "https://github.com/Caio-Dias02",
    category: "Portfolio"
  },
  {
    title: "Plataforma de Cursos",
    description: "Sistema de ensino online com videoaulas, quizzes interativos, certificados automáticos e área do aluno personalizada.",
    tech: ["Next.js", "PostgreSQL", "AWS", "WebRTC"],
    link: "#",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    github: "https://github.com/Caio-Dias02",
    category: "EdTech"
  }
];

export default function Projects() {
  const titleRef = useScrollReveal();
  const projectsRef = useScrollRevealStagger(150);
  const ctaRef = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-20 scroll-reveal">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes tecnologias e abordagens de desenvolvimento
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="scroll-reveal">
              <ProjectCard {...project} index={index} />
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="text-center mt-16 scroll-reveal">
          <p className="text-gray-400 mb-6">Interessado em ver mais projetos?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Vamos conversar
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
