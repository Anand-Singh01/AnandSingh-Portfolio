
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Featured = () => {
  const featuredRef = useScrollReveal();

  const featuredProject = {
    title: "Java Drone Rescue System",
    problem: "Emergency response teams need efficient tools for search and rescue operations in challenging terrains where traditional methods may be insufficient.",
    process: "Developed a modular Java application implementing SOLID and GRASP design principles. Created autonomous navigation algorithms with collision detection, implemented comprehensive JUnit testing suite, and established CI/CD pipeline with GitHub Actions. Used JSON-based command interface for flexibility.",
    result: "Successfully delivered a robust, maintainable system that demonstrates advanced software engineering principles. The modular architecture allows for easy extension and the automated testing ensures reliability in critical scenarios.",
    tags: ["Java", "SOLID Principles", "JUnit", "GitHub Actions", "Algorithms", "Design Patterns"],
    github: "https://github.com"
  };

  return (
    <div className="min-h-screen py-20 warm-bg">
      <div ref={featuredRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Featured Project</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A deep dive into one of my most comprehensive projects.
          </p>
        </div>

        <Card className="cozy-card mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-3xl font-bold text-foreground">
                {featuredProject.title}
              </CardTitle>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-accent transition-colors duration-300"
                  onClick={() => window.open(featuredProject.github, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {featuredProject.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="bg-portfolio-primary/10 text-portfolio-primary border-portfolio-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-portfolio-primary">Problem</h3>
              <p className="text-muted-foreground leading-relaxed">
                {featuredProject.problem}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-portfolio-primary">Process</h3>
              <p className="text-muted-foreground leading-relaxed">
                {featuredProject.process}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-portfolio-primary">Result</h3>
              <p className="text-muted-foreground leading-relaxed">
                {featuredProject.result}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Featured;
