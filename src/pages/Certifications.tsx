
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Certifications = () => {
  const certificationsRef = useScrollReveal();

  const certifications = [
    {
      title: "Crash Course on Python",
      provider: "Google",
      date: "2024",
      logo: "🐍",
      skills: ["Python", "Programming Fundamentals", "Automation"]
    },
    {
      title: "Introduction to Cloud Computing",
      provider: "IBM",
      date: "2024",
      logo: "☁️",
      skills: ["Cloud Computing", "AWS", "Infrastructure"]
    },
    {
      title: "Introduction to Web Development",
      provider: "IBM",
      date: "2023",
      logo: "🌐",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"]
    },
    {
      title: "Machine Learning & AI with Python",
      provider: "HarvardX (CS109xa)",
      date: "2024",
      logo: "🎓",
      skills: ["Machine Learning", "Python", "Data Science", "AI"]
    },
    {
      title: "Introduction to Data Science",
      provider: "HarvardX (CS109x)",
      date: "2024",
      logo: "📊",
      skills: ["Data Science", "Statistics", "Python", "Analysis"]
    }
  ];

  return (
    <div className="min-h-screen py-20 warm-bg">
      <div ref={certificationsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my skills and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="hover-lift cozy-card relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-portfolio-primary"></div>
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-3">
                  <div className="text-3xl">{cert.logo}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {cert.title}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium">{cert.provider}</p>
                    <Badge variant="outline" className="text-xs mt-2">
                      {cert.date}
                    </Badge>
                  </div>
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
    </div>
  );
};

export default Certifications;
