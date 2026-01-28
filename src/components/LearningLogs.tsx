
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useScrollReveal } from '../hooks/useScrollReveal';

const LearningLogs = () => {
  const logsRef = useScrollReveal();

  const learningEntries = [
    {
      title: "Building a Custom React Hook for API Calls",
      date: "March 15, 2024",
      summary: "Explored creating reusable hooks for data fetching with error handling and loading states.",
      tags: ["React", "Custom Hooks", "TypeScript"],
      link: "#"
    },
    {
      title: "Implementing Dark Mode with CSS Variables",
      date: "March 10, 2024",
      summary: "Deep dive into CSS custom properties and smooth theme transitions without flicker.",
      tags: ["CSS", "Dark Mode", "Performance"],
      link: "#"
    },
    {
      title: "Understanding Database Indexing",
      date: "March 5, 2024",
      summary: "Practical exploration of how database indexes work and their impact on query performance.",
      tags: ["Database", "Performance", "SQL"],
      link: "#"
    },
    {
      title: "Building Responsive Layouts with CSS Grid",
      date: "February 28, 2024",
      summary: "Experimenting with CSS Grid for complex responsive layouts and auto-fit techniques.",
      tags: ["CSS Grid", "Responsive Design", "Layout"],
      link: "#"
    },
    {
      title: "Exploring WebAssembly with Rust",
      date: "February 20, 2024",
      summary: "First steps into WebAssembly by compiling simple Rust functions for web performance.",
      tags: ["WebAssembly", "Rust", "Performance"],
      link: "#"
    },
    {
      title: "Docker Containers for Development",
      date: "February 15, 2024",
      summary: "Setting up consistent development environments using Docker and docker-compose.",
      tags: ["Docker", "DevOps", "Environment"],
      link: "#"
    }
  ];

  return (
    <section id="learning" className="py-20">
      <div ref={logsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Learning Logs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Small experiments and explorations that fuel my continuous learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningEntries.map((entry, index) => (
            <Card 
              key={entry.title}
              className="hover-lift group cursor-pointer border-border/50 hover:border-portfolio-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold group-hover:text-portfolio-primary transition-colors duration-300">
                    {entry.title}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {entry.date}
                  </span>
                </div>
                <CardDescription className="text-muted-foreground">
                  {entry.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-portfolio-primary/30 text-portfolio-primary hover:bg-portfolio-primary/10 transition-colors duration-300"
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

export default LearningLogs;
