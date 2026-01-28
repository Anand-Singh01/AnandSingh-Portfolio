import React from 'react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const projectsRef = useScrollReveal();

  // Helper to render bold keywords from strings like **text**
  const formatText = (text) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, i) =>
      part.startsWith('**') && part.endsWith('**')
        ? <strong key={i} className="text-portfolio-primary font-semibold">{part.slice(2, -2)}</strong>
        : part
    );
  };

  const projectData = [
    {
      title: "Investment News platform",
      type: "Professional Experience",
      overview: "Driving technical reliability and performance for a high-traffic financial news and data platform.",
      achievements: [
        "Engineered **real-time stock rate APIs**, reducing data retrieval errors by **30%** for thousands of daily users.",
        "Independently developed **automation scripts** for data integration, reducing manual intervention by **50%**.",
        "Optimized **backend architecture** and article management systems, resulting in a **40% increase** in publishing efficiency.",
        "Maintaining **99% uptime** through proactive performance monitoring and scalable API enhancements."
      ],
      tags: ["ASP.NET", "C#", "SQL Server", "API Design", "Automation"],
      demo: "https://www.investorideas.com/",
      isCurrent: true
    },
    {
      title: "Full-Stack Social Platform",
      type: "Software Engineering",
      overview: "A comprehensive social ecosystem designed for real-time interactivity and scalable state management.",
      achievements: [
        "Architected a **WebSocket-driven chat system** for instant, bi-directional messaging.",
        "Implemented **Redux Toolkit** for centralized state management across complex user flows.",
        "Built a secure **Node.js/TypeScript** backend applying MVC architecture for maintainability."
      ],
      tags: ["MERN Stack", "WebSockets", "TypeScript", "Redux"],
      github: "https://github.com/Anand-Singh01/Forums_App_MERN_Backend"
    },
    {
      title: "GameVault E-Commerce",
      type: "Software Engineering",
      overview: "An end-to-end digital storefront featuring a robust administrative fulfillment dashboard.",
      achievements: [
        "Developed an **Admin Dashboard** for real-time order tracking and inventory management.",
        "Integrated **RESTful APIs** with .NET Core to handle secure payment and delivery data.",
        "Managed **complex relational schemas** in MS SQL to ensure data persistence and integrity."
      ],
      tags: [".NET Core", "MS SQL", "React", "REST API"],
      github: "https://github.com/Anand-Singh01/GameStoreApp"
    }
  ];

  return (
    <section className="py-20 warm-bg min-h-screen">
      <div ref={projectsRef} className="max-w-4xl mx-auto px-4 scroll-reveal">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Featured Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engineered solutions bridging the gap between complex backend logic and intuitive user experiences.
          </p>
        </div>

        <div className="space-y-20">
          {projectData.map((project, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-portfolio-primary/20">
              {/* Timeline Indicator */}
              <div className="absolute w-4 h-4 bg-portfolio-primary rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(var(--primary),0.3)]" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-tighter font-bold text-portfolio-primary bg-portfolio-primary/5 px-2 py-0.5 rounded border border-portfolio-primary/10">
                    {project.type}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-2">{project.title}</h3>
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" className="h-9 w-9 p-0" onClick={() => window.open(project.github, '_blank')}>
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" className="h-9 w-9 p-0 border-portfolio-primary/50 text-portfolio-primary hover:bg-portfolio-primary/10" onClick={() => window.open(project.demo, '_blank')}>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-6 text-lg">
                {project.overview}
              </p>

              <ul className="space-y-3 mb-8">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-foreground/90">
                    <span className="mr-3 text-portfolio-primary mt-1">▹</span>
                    <span className="leading-relaxed">{formatText(achievement)}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-portfolio-primary/5 text-portfolio-primary border-portfolio-primary/10 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;