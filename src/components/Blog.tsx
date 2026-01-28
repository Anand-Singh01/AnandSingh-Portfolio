
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Blog = () => {
  const blogRef = useScrollReveal();

  const blogPosts = [
    {
      title: "The Journey from Code to Career: Lessons from My First Year",
      date: "March 20, 2024",
      excerpt: "Reflections on the challenges, breakthroughs, and unexpected lessons learned during my first year as a software engineering student.",
      readTime: "5 min read",
      link: "#"
    },
    {
      title: "Why I Choose Open Source: Contributing to the Developer Community",
      date: "March 12, 2024",
      excerpt: "Exploring the benefits of open source contribution and how it's shaped my development skills and professional network.",
      readTime: "4 min read",
      link: "#"
    },
    {
      title: "Building vs. Buying: A Student's Perspective on Technology Choices",
      date: "March 1, 2024",
      excerpt: "When should you build from scratch versus using existing solutions? Lessons learned from academic and personal projects.",
      readTime: "6 min read",
      link: "#"
    },
    {
      title: "The Art of Learning in Public: Documenting My Development Journey",
      date: "February 25, 2024",
      excerpt: "How sharing my learning process publicly has accelerated my growth and connected me with amazing developers.",
      readTime: "3 min read",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-accent/5">
      <div ref={blogRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Blog</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and reflections from my journey in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title}
              className="hover-lift group cursor-pointer border-border/50 hover:border-portfolio-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold group-hover:text-portfolio-primary transition-colors duration-300 mb-2">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-portfolio-primary font-medium group-hover:underline transition-all duration-300">
                    Read more →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
