import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

const educationList = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Naga College Foundation",
    period: "2024 – Present",
    status: "Current",
    description:
      "Building a strong foundation in programming fundamentals, data structures, relational database management, and server-side software development.",
    achievements: [
      "Academic Achievement Awardee",
      "Focused on Backend Architecture & Database Systems",
    ],
  },
  {
    degree: "Senior High School — General Academic Strand (GAS)",
    institution: "Naga College Foundation",
    period: "2022 – 2024",
    status: "Completed",
    description:
      "Completed a multidisciplinary curriculum emphasizing analytical thinking, research methodology, and core academic competencies.",
    achievements: ["Graduated With Honors"],
  },
];

export default function Education() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 space-y-10">
      {/* Header Section matching About.tsx and Contact.tsx */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
          <BookOpen className="h-4 w-4" />
          <span>Academic Background</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Education
        </h1>
        <p className="text-muted-foreground mt-2 max-w-xl">
          Formal academic training, coursework, and milestones shaping my software engineering foundation.
        </p>
      </div>

      {/* Vertical Timeline Layout */}
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-6 before:h-full before:w-0.5 before:bg-border">
        {educationList.map((item, idx) => (
          <div key={idx} className="relative flex items-start gap-6">
            {/* Timeline Node Icon */}
            <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm text-primary z-10">
              <GraduationCap className="h-5 w-5 md:h-6 md:w-6" />
            </div>

            {/* Education Card */}
            <Card className="flex-1 shadow-sm border-muted transition-colors hover:border-primary/40">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{item.degree}</CardTitle>
                    <CardDescription className="text-sm font-medium text-foreground/80 mt-1">
                      {item.institution}
                    </CardDescription>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Badge
                      variant={item.status === "Current" ? "default" : "secondary"}
                      className="text-xs font-normal"
                    >
                      <Calendar className="mr-1.5 h-3 w-3" />
                      {item.period}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-border/60">
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5 mb-2.5">
                    <Award className="h-3.5 w-3.5 text-primary" /> Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((ach, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs font-medium bg-primary/5 border-primary/20 text-foreground"
                      >
                        {ach}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}