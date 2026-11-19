import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Database, Terminal, Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: ["Node.js & Express", "TypeScript", "Python", "REST APIs & GraphQL"],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Oracle", "Redis"],
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    skills: ["Docker", "Git & GitHub", "Linux", "CI/CD Pipelines"],
  },
];

export default function About() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 space-y-10">
      {/* Header Section */}
      <div className="border-b pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
            <Server className="h-4 w-4" />
            <span>Backend Developer</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Antonio Diaz
          </h1>
          <p className="text-muted-foreground mt-2 max-w-xl">
            Architecting reliable APIs, optimizing database performance, and building scalable server-side systems.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bio Card (Takes up 2 columns on medium+ screens) */}
        <Card className="md:col-span-2 shadow-sm border-muted">
          <CardHeader>
            <CardTitle className="text-xl">About Me</CardTitle>
            <CardDescription>Background & Engineering Focus</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hi! I&apos;m <strong className="text-foreground font-medium">Antonio Diaz</strong>, a dedicated Backend Developer with a strong passion for server-side architecture, data modeling, and building robust software infrastructure.
            </p>
            <p>
              My focus is on designing secure, high-performance APIs and managing relational and non-relational databases that power seamless user experiences. I enjoy solving complex logic problems, optimizing query execution, and ensuring systems remain resilient under load.
            </p>
            <p>
              Whether structuring microservices or automating deployment workflows, I am constantly sharpening my engineering fundamentals and exploring modern backend technologies to write cleaner, more maintainable code.
            </p>
          </CardContent>
        </Card>

        {/* Skills Card (Takes up 1 column on medium+ screens) */}
        <Card className="shadow-sm border-muted">
          <CardHeader>
            <CardTitle className="text-xl">Tech Stack</CardTitle>
            <CardDescription>Core backend technologies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="space-y-2.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{category.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs font-normal px-2.5 py-0.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}