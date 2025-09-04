import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact"
      },
      // Home page
      home: {
        greeting: "Hello! I'm",
        name: "Caio Dias",
        role: "Full Stack Developer",
        description: "I develop modern and responsive web applications using the latest technologies. Passionate about creating digital solutions that make a difference.",
        cta: "Get in touch",
        downloadCV: "Download CV"
      },
      // About page
      about: {
        title: "About Me",
        description: "Full Stack developer with experience in modern technologies",
        intro: "I'm a passionate Full Stack developer focused on creating exceptional digital experiences. I have solid experience with modern technologies and I'm always looking to learn and improve my skills.",
        skills: "Skills & Technologies",
        experience: "Professional Experience",
        education: "Academic Background"
      },
      // Projects page
      projects: {
        title: "My Projects",
        description: "A selection of my most recent work, showcasing different technologies and development approaches",
        cta: "Interested in seeing more projects?",
        contact: "Let's talk",
        github: "View on GitHub",
        project1: {
          title: "Financial Management System",
          description: "Complete system for personal financial management with interactive dashboard, account control and detailed reports."
        },
        project2: {
          title: "MuscleUp",
          description: "Platform to create and manage workout plans with performance monitoring and user progress tracking."
        },
        project3: {
          title: "Personal Blog",
          description: "Blog for sharing personal and professional content with authentication system and responsive interface."
        },
        project4: {
          title: "Personal Portfolio",
          description: "Responsive portfolio to showcase projects and skills with modern design and intuitive navigation."
        }
      },
      // Contact page
      contact: {
        title: "Get in Touch",
        description: "I'm always open to new opportunities and interesting projects",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message",
          sending: "Sending...",
          success: "Message sent successfully!",
          error: "Error sending message. Please try again."
        },
        info: {
          email: "Email",
          phone: "Phone",
          location: "Location"
        }
      },
      // Footer
      footer: {
        description: "Full Stack developer specialized in creating modern and scalable web solutions.",
        navigation: "Navigation",
        connect: "Connect",
        workTogether: "Let's work together!",
        rights: "All rights reserved.",
        madeWith: "Made with ❤️ by"
      }
    }
  },
  es: {
    translation: {
      // Navigation
      nav: {
        home: "Inicio",
        about: "Sobre mí",
        projects: "Proyectos",
        contact: "Contacto"
      },
      // Home page
      home: {
        greeting: "¡Hola! Soy",
        name: "Caio Dias",
        role: "Desarrollador Full Stack",
        description: "Desarrollo aplicaciones web modernas y responsivas utilizando las últimas tecnologías. Apasionado por crear soluciones digitales que marquen la diferencia.",
        cta: "Ponte en contacto",
        downloadCV: "Descargar CV"
      },
      // About page
      about: {
        title: "Sobre Mí",
        description: "Desarrollador Full Stack con experiencia en tecnologías modernas",
        intro: "Soy un desarrollador Full Stack apasionado enfocado en crear experiencias digitales excepcionales. Tengo experiencia sólida con tecnologías modernas y siempre busco aprender y mejorar mis habilidades.",
        skills: "Habilidades y Tecnologías",
        experience: "Experiencia Profesional",
        education: "Formación Académica"
      },
      // Projects page
      projects: {
        title: "Mis Proyectos",
        description: "Una selección de mis trabajos más recientes, demostrando diferentes tecnologías y enfoques de desarrollo",
        cta: "¿Interesado en ver más proyectos?",
        contact: "Hablemos",
        github: "Ver en GitHub",
        project1: {
          title: "Sistema de Gestión Financiera",
          description: "Sistema completo para gestión financiera personal con dashboard interactivo, control de cuentas e informes detallados."
        },
        project2: {
          title: "MuscleUp",
          description: "Plataforma para crear y gestionar planes de entrenamiento con monitoreo de rendimiento y seguimiento del progreso del usuario."
        },
        project3: {
          title: "Blog Personal",
          description: "Blog para compartir contenido personal y profesional con sistema de autenticación e interfaz responsiva."
        },
        project4: {
          title: "Portafolio Personal",
          description: "Portafolio responsivo para presentar proyectos y habilidades con diseño moderno y navegación intuitiva."
        }
      },
      // Contact page
      contact: {
        title: "Ponte en Contacto",
        description: "Siempre estoy abierto a nuevas oportunidades y proyectos interesantes",
        form: {
          name: "Nombre",
          email: "Email",
          message: "Mensaje",
          send: "Enviar Mensaje",
          sending: "Enviando...",
          success: "¡Mensaje enviado con éxito!",
          error: "Error al enviar mensaje. Por favor, inténtalo de nuevo."
        },
        info: {
          email: "Email",
          phone: "Teléfono",
          location: "Ubicación"
        }
      },
      // Footer
      footer: {
        description: "Desarrollador Full Stack especializado en crear soluciones web modernas y escalables.",
        navigation: "Navegación",
        connect: "Conectar",
        workTogether: "¡Trabajemos juntos!",
        rights: "Todos los derechos reservados.",
        madeWith: "Hecho con ❤️ por"
      }
    }
  },
  pt: {
    translation: {
      // Navigation
      nav: {
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato"
      },
      // Home page
      home: {
        greeting: "Olá! Eu sou",
        name: "Caio Dias",
        role: "Desenvolvedor Full Stack",
        description: "Desenvolvo aplicações web modernas e responsivas usando as tecnologias mais recentes. Apaixonado por criar soluções digitais que fazem a diferença.",
        cta: "Entre em contato",
        downloadCV: "Baixar CV"
      },
      // About page
      about: {
        title: "Sobre Mim",
        description: "Desenvolvedor Full Stack com experiência em tecnologias modernas",
        intro: "Sou um desenvolvedor Full Stack apaixonado focado em criar experiências digitais excepcionais. Tenho experiência sólida com tecnologias modernas e estou sempre buscando aprender e melhorar minhas habilidades.",
        skills: "Habilidades e Tecnologias",
        experience: "Experiência Profissional",
        education: "Formação Acadêmica"
      },
      // Projects page
      projects: {
        title: "Meus Projetos",
        description: "Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes tecnologias e abordagens de desenvolvimento",
        cta: "Interessado em ver mais projetos?",
        contact: "Vamos conversar",
        github: "Ver no GitHub",
        project1: {
          title: "Sistema de Gestão Financeira",
          description: "Sistema completo para gestão financeira pessoal com dashboard interativo, controle de contas e relatórios detalhados."
        },
        project2: {
          title: "MuscleUp",
          description: "Plataforma para criar e gerenciar planos de treino com monitoramento de performance e progresso do usuário."
        },
        project3: {
          title: "Blog Pessoal",
          description: "Blog para compartilhar conteúdo pessoal e profissional com sistema de autenticação e interface responsiva."
        },
        project4: {
          title: "Portfólio Pessoal",
          description: "Portfólio responsivo para apresentar projetos e habilidades com design moderno e navegação intuitiva."
        }
      },
      // Contact page
      contact: {
        title: "Entre em Contato",
        description: "Estou sempre aberto a novas oportunidades e projetos interessantes",
        form: {
          name: "Nome",
          email: "Email",
          message: "Mensagem",
          send: "Enviar Mensagem",
          sending: "Enviando...",
          success: "Mensagem enviada com sucesso!",
          error: "Erro ao enviar mensagem. Tente novamente."
        },
        info: {
          email: "Email",
          phone: "Telefone",
          location: "Localização"
        }
      },
      // Footer
      footer: {
        description: "Desenvolvedor Full Stack especializado em criar soluções web modernas e escaláveis.",
        navigation: "Navegação",
        connect: "Conecte-se",
        workTogether: "Vamos trabalhar juntos!",
        rights: "Todos os direitos reservados.",
        madeWith: "Feito com ❤️ por"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    lng: 'pt',
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;