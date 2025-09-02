import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  github?: string;
  category?: string;
  index?: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  tech, 
  link, 
  image, 
  github, 
  category, 
  index = 0 
}: ProjectCardProps) {
  return (
    <div 
      className="group animate-fade-in-delay"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/15 overflow-hidden h-full">
        {/* Image */}
        {image && (
          <div className="relative overflow-hidden h-48">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Category Badge */}
            {category && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-purple-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                  {category}
                </span>
              </div>
            )}
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex gap-3">
                <Button 
                  asChild 
                  size="sm"
                  className="bg-white/90 text-gray-900 hover:bg-white rounded-full px-4"
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </Button>
                {github && (
                  <Button 
                    asChild 
                    size="sm" 
                    variant="outline"
                    className="bg-gray-900/90 border-white/30 text-white hover:bg-gray-800 rounded-full px-4"
                  >
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        <CardHeader className="pb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="pb-4 flex-1">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {tech.map((technology, techIndex) => (
              <span 
                key={techIndex}
                className="px-3 py-1 bg-purple-500/30 text-purple-200 text-xs font-medium rounded-full border border-purple-400/30 backdrop-blur-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-0 flex gap-2">
          <Button 
            asChild 
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-full transition-all duration-300"
          >
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              Ver Projeto
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </Button>
          
          {github && (
            <Button 
              asChild 
              variant="outline" 
              className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-300 rounded-full px-4 transition-all duration-300"
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
