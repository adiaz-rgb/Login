"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Terminal, CheckCircle2 } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "adiaz@gbox.ncf.edu.ph",
    href: "mailto:adiaz@gbox.ncf.edu.ph",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "09068874636",
    href: "tel:09068874636",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Naga City, Philippines",
    href: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 space-y-10">
      {/* Header Section matching About.tsx */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
          <Terminal className="h-4 w-4" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Contact Me
        </h1>
        <p className="text-muted-foreground mt-2 max-w-xl">
          Looking to collaborate on backend architecture, API development, or a full-stack project? Drop a message below.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Direct Contact Info */}
        <div className="space-y-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.label} className="shadow-sm border-muted transition-colors hover:border-primary/40">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-medium">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Right Column: Contact Form */}
        <Card className="md:col-span-2 shadow-sm border-muted">
          <CardHeader>
            <CardTitle className="text-xl">Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="h-10 w-10 text-primary mx-auto" />
                <h3 className="text-lg font-semibold">Message Sent!</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Thanks for reaching out. I&apos;ve received your message and will reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input id="name" placeholder="Juan Dela Cruz" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="juan@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="API Integration / Backend Collaboration"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project, timeline, or question..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}