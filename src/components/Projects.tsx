import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const projectsRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState('general');

  const generalProjects = [
    {
      title: "University Website Revamp",
      description: "Complete redesign and development of university department website with modern UI/UX principles.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Figma"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  const schoolProjects = [
    {
      title: "Java Drone Control System",
      description: "Object-oriented drone simulation with autonomous navigation and collision detection algorithms.",
      tags: ["Java", "OOP", "Algorithms", "JUnit"],
      github: "https://github.com"
    }
  ];

  const currentProjects = activeTab === 'general' ? generalProjects : schoolProjects;

  return (
    <section id="projects" className="py-20 bg-accent/5">
      <div ref={projectsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my work spanning freelance projects, academic assignments, and personal explorations.
          </p>
        </div>

        {/* Project Categories */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-full p-1 border border-border">
            <Button
              variant={activeTab === 'general' ? 'default' : 'ghost'}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeTab === 'general' 
                  ? 'bg-portfolio-primary text-primary-foreground shadow-lg' 
                  : 'hover:bg-accent'
              }`}
              onClick={() => setActiveTab('general')}
            >
              General Projects
            </Button>
            <Button
              variant={activeTab === 'school' ? 'default' : 'ghost'}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeTab === 'school' 
                  ? 'bg-portfolio-primary text-primary-foreground shadow-lg' 
                  : 'hover:bg-accent'
              }`}
              onClick={() => setActiveTab('school')}
            >
              School Projects
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="hover-lift group cursor-pointer border-border/50 hover:border-portfolio-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold group-hover:text-portfolio-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex space-x-2">
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 hover:bg-accent transition-colors duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs bg-portfolio-primary/10 text-portfolio-primary border-portfolio-primary/20 hover:bg-portfolio-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
