import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string | null;
  image?: string;
  github?: string;
  category?: string;
  index?: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  tech, 
  image, 
  github, 
  index = 0 
}: ProjectCardProps) {
  const { t } = useTranslation();
  return (
    <div 
      className="group animate-fade-in-delay"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/15 overflow-hidden h-full group-hover:border-blue-400/50">
        {/* Image */}
        {image && (
          <div className="relative overflow-hidden h-40 sm:h-48 lg:h-52">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            
          </div>
        )}

        <CardHeader className="pb-3 px-4 sm:px-6">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-all duration-300 line-clamp-2 transform group-hover:translate-x-1">
            {title}
          </h3>
      </CardHeader>

        <CardContent className="pb-4 flex-1 px-4 sm:px-6">
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tech.map((technology, techIndex) => (
              <span 
                key={techIndex}
                className="px-2 sm:px-3 py-1 bg-blue-500/30 text-blue-200 text-xs font-medium rounded-full border border-blue-400/30 backdrop-blur-sm hover:bg-blue-500/50 hover:border-blue-400/60 transition-all duration-200"
              >
                {technology}
              </span>
            ))}
          </div>
      </CardContent>

        <CardFooter className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
          <Button 
            asChild 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white border-0 rounded-full transition-all duration-300"
          >
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm sm:text-base">
              {t('projects.github')}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </Button>
      </CardFooter>
    </Card>
    </div>
  );
}
