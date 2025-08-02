import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { sanitizeInput, validateEmail } from '../utils/security';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { themeConfig } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'jkhatun258@gmail.com', href: 'mailto:jkhatun258@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+918617737598', href: 'tel:+918617737598' },
    { icon: MapPin, label: 'Address', value: 'Gorachand lane Parkcircus, kolkata City, West Bengal 712406', href: '#' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (formData.name.length < 2 || formData.message.length < 10) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields with sufficient information.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const quickQuestions = [
    'How do I customize themes?',
    'Is this mobile responsive?',
    'Can I use this in my project?',
    'What technologies are used?',
  ];

  return (
    <div className="space-y-12 animate-theme-switch">
      {/* Header */}
      <section className="text-center space-y-4">
        <Badge variant="outline" className="px-4 py-1">
          Get In Touch
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions about ThemeVault? We'd love to hear from you. 
          Send us a message and we'll respond as soon as possible.
        </p>
      </section>

      <div className={`
        ${themeConfig.layout === 'sidebar' ? 'space-y-8' : 
          themeConfig.layout === 'grid' ? 'card-grid' : 
          'grid lg:grid-cols-3 gap-8'}
      `}>
        {/* Contact Form */}
        <div className={themeConfig.layout === 'grid' ? 'md:col-span-2' : 'lg:col-span-2'}>
          <Card className="theme-shadow hover:scale-[1.02] transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                    required
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    className="transition-all duration-200 focus:scale-[1.02] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gap-2 hover:scale-105 transition-transform"
                  size="lg"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info & Quick Questions */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card className="theme-shadow hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.label}</p>
                    <a 
                      href={info.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card className="theme-shadow hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours during business days.
              </p>
            </CardContent>
          </Card>

          {/* Quick Questions */}
          <Card className="theme-shadow hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Quick Questions?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setFormData(prev => ({ 
                    ...prev, 
                    subject: question,
                    message: `Hi! I have a question about: ${question}` 
                  }))}
                  className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted text-sm transition-all duration-200 hover:scale-[1.02]"
                >
                  {question}
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Current Theme Info */}
      <section className="bg-card rounded-xl p-6 border theme-shadow text-center">
        <p className="text-muted-foreground">
          You're currently viewing this page in{' '}
          <span className="font-semibold text-primary">{themeConfig.name}</span> theme 
          with <span className="font-semibold capitalize">{themeConfig.layout}</span> layout.
        </p>
      </section>
    </div>
  );
};

export default Contact;