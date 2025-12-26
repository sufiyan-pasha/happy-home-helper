import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  LayoutDashboard, 
  CheckCircle, 
  Users, 
  Shield, 
  ArrowRight,
  Zap,
  BarChart3,
  Clock
} from 'lucide-react';

const Index: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: CheckCircle,
      title: 'Task Management',
      description: 'Create, update, and track tasks with intuitive Kanban boards',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with role-based access control',
    },
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'JWT-based authentication keeps your data safe',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track progress with beautiful visual statistics',
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Stay synced with instant task status changes',
    },
    {
      icon: Zap,
      title: 'Fast & Responsive',
      description: 'Lightning-fast performance on any device',
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <header className="relative z-10 container py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-info flex items-center justify-center">
              <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">TaskFlow</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button variant="hero" onClick={() => navigate('/register')}>
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container pt-16 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Zap className="h-4 w-4" />
            Built with MERN Stack
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 animate-slide-up">
            Manage Tasks
            <br />
            <span className="gradient-text">Like Never Before</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up stagger-1">
            A powerful, scalable task management platform built with MongoDB, Express, React, and Node.js. 
            Organize your work, collaborate with your team, and achieve more.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-2">
            <Button variant="hero" size="xl" onClick={() => navigate('/register')}>
              Start Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="xl" onClick={() => navigate('/login')}>
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 animate-fade-in stagger-3">
            <div>
              <p className="text-3xl font-display font-bold gradient-text">99%</p>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold gradient-text">50K+</p>
              <p className="text-sm text-muted-foreground">Tasks Managed</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold gradient-text">4.9</p>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 container pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powerful features designed to help you manage tasks efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-hover glass animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container pb-24">
        <Card className="glass overflow-hidden">
          <CardContent className="p-12 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Join thousands of teams who use TaskFlow to manage their projects efficiently
              </p>
              <Button variant="hero" size="xl" onClick={() => navigate('/register')}>
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-8">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-5 w-5 text-primary" />
            <span className="font-display font-semibold">TaskFlow</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 TaskFlow. Built with MERN Stack.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
