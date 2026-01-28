
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useScrollReveal } from '../hooks/useScrollReveal';

const LearningLogs = () => {
  const logsRef = useScrollReveal();

  const experienceData = [
    {
      company: "InvestorIdeas",
      role: "Software Developer",
      type: "Contract",
      period: "Jan 2026 — Present",
      overview: "Optimizing a high-traffic financial news platform through real-time API development and workflow automation.",
      achievements: [
        "Engineered **real-time stock rate APIs**, reducing data retrieval errors by **30%**.",
        "Developed automation scripts that cut manual data entry by **50%**.",
        "Optimized backend systems resulting in a **40% increase** in publishing efficiency.",
        "Maintained **99% uptime** through proactive performance monitoring and error resolution."
      ],
      skills: ["ASP.NET", "C#", "SQL Server", "REST APIs", "Automation"]
    }
  ];
  const formatText = (text) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, i) =>
      part.startsWith('**') && part.endsWith('**')
        ? <strong key={i} className="text-portfolio-primary font-semibold">{part.slice(2, -2)}</strong>
        : part
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 gradient-text">Professional Experience</h2>

        <div className="space-y-16">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-portfolio-primary/20">
              {/* Timeline Indicator */}
              <div className="absolute w-4 h-4 bg-portfolio-primary rounded-full -left-[9px] top-1" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                <span className="text-sm font-medium text-portfolio-primary bg-portfolio-primary/10 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>

              <div className="text-lg font-medium text-muted-foreground mb-4">
                {exp.company} <span className="text-sm font-normal italic opacity-80">({exp.type})</span>
              </div>

              <p className="text-muted-foreground mb-6 max-w-2xl">
                {exp.overview}
              </p>

              <ul className="space-y-3 mb-8">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-foreground/90">
                    <span className="mr-3 text-portfolio-primary mt-1">▹</span>
                    <span>{formatText(achievement)}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-portfolio-primary/5 text-portfolio-primary border-portfolio-primary/10">
                    {skill}
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

export default LearningLogs;
