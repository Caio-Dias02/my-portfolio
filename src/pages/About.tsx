
import { useScrollReveal, useScrollRevealStagger } from "../hooks/useScrollReveal";

export default function About() {
  const titleRef = useScrollReveal();
  const textRef = useScrollReveal();
  const skillsRef = useScrollReveal();
  const statsRef = useScrollRevealStagger(200);

  const skills = [
    { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "NestJS", level: 85, color: "from-red-500 to-pink-500" },
    { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-800" },
    { name: "PostgreSQL", level: 80, color: "from-blue-700 to-indigo-600" },
    { name: "Docker", level: 75, color: "from-blue-400 to-blue-600" },
    { name: "Tailwind CSS", level: 95, color: "from-teal-500 to-green-500" },
    { name: "Shadcn/ui", level: 90, color: "from-gray-600 to-gray-800" },
    { name: "GitHub", level: 85, color: "from-gray-700 to-gray-900" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-blue-600">
            Sobre Mim
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-500 mx-auto mb-6 sm:mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Text content */}
          <div ref={textRef} className="space-y-6 scroll-reveal-left order-1">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                Desenvolvedor Full Stack
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Especializado em desenvolvimento de aplicações web modernas e escaláveis utilizando React.js, NestJS, 
                TypeScript e PostgreSQL. Experiência com Docker e práticas de DevOps.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Foco em performance, segurança e experiência do usuário (UX), sempre buscando entregar 
                soluções robustas e eficientes. Apaixonado por tecnologia e em constante aprendizado.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div ref={skillsRef} className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 scroll-reveal-right order-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-800">Habilidades Técnicas</h3>
            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">{skill.name}</span>
                    <span className="text-xs sm:text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {[
            { number: "2025", label: "Carreira Atual" },
            { number: "32+", label: "Repositórios" },
            { number: "8+", label: "Tecnologias" },
            { number: "Full Stack", label: "Especialização" }
          ].map((stat, index) => (
            <div key={index} className={`text-center scroll-reveal stagger-delay-${index + 1}`}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
