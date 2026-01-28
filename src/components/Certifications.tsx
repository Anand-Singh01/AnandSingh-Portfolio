
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Certifications = () => {
  const certificationsRef = useScrollReveal();

  const certifications = [
    {
      title: "Crash Course on Python",
      provider: "Google",
      date: "2024",
      logo: "🐍",
      skills: ["Python", "Programming Fundamentals", "Automation"],
      color: "bg-blue-500"
    },
    {
      title: "Introduction to Cloud Computing",
      provider: "IBM",
      date: "2024",
      logo: "☁️",
      skills: ["Cloud Computing", "AWS", "Infrastructure"],
      color: "bg-cyan-500"
    },
    {
      title: "Introduction to Web Development",
      provider: "IBM",
      date: "2023",
      logo: "🌐",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"],
      color: "bg-green-500"
    },
    {
      title: "Machine Learning with Python",
      provider: "IBM",
      date: "2024",
      logo: "🤖",
      skills: ["Machine Learning", "Python", "Data Science", "TensorFlow"],
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div ref={certificationsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my skills and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="hover-lift group cursor-pointer border-border/50 hover:border-portfolio-primary/50 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${cert.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{cert.logo}</div>
                    <div>
                      <CardTitle className="text-lg font-semibold group-hover:text-portfolio-primary transition-colors duration-300">
                        {cert.title}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">{cert.provider}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs bg-portfolio-primary/10 text-portfolio-primary border-portfolio-primary/20"
                    >
                      {skill}
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

export default Certifications;
