
import profileImage from "../assets/Profile.png";
import { useScrollReveal, useScrollRevealStagger } from "../hooks/useScrollReveal";

export default function About() {
  const titleRef = useScrollReveal();
  const profileRef = useScrollReveal();
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
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Profile Image */}
          <div ref={profileRef} className="flex justify-center md:justify-start scroll-reveal-scale">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Caio Dias - Assistant Developer" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">Dev</span>
              </div>
            </div>
          </div>

          {/* Left side - Text content */}
          <div ref={textRef} className="space-y-6 md:col-span-1 scroll-reveal-left">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Desenvolvedor Full Stack
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Especializado em desenvolvimento de aplicações web modernas e escaláveis utilizando React.js, NestJS, 
                TypeScript e PostgreSQL. Experiência com Docker e práticas de DevOps.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Foco em performance, segurança e experiência do usuário (UX), sempre buscando entregar 
                soluções robustas e eficientes. Apaixonado por tecnologia e em constante aprendizado.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Full Stack", "DevOps", "Escalabilidade", "Segurança", "Performance", "UX"].map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Skills */}
          <div ref={skillsRef} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50 md:col-span-1 scroll-reveal-right">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Habilidades Técnicas</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "2025", label: "Carreira Atual" },
            { number: "32+", label: "Repositórios" },
            { number: "8+", label: "Tecnologias" },
            { number: "Full Stack", label: "Especialização" }
          ].map((stat, index) => (
            <div key={index} className={`text-center scroll-reveal stagger-delay-${index + 1}`}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
