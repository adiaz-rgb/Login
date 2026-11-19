import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Gamepad2, Music, Coffee, Trophy, Sparkles } from "lucide-react";

const hobbies = [
  {
    title: "Football & Basketball",
    icon: Trophy,
    tag: "Active",
    featured: true,
    description:
      "Staying competitive and active on the field and the court—building teamwork, endurance, and discipline outside of software development.",
  },
  {
    title: "Photography",
    icon: Camera,
    tag: "Creative",
    featured: false,
    description:
      "Capturing candid moments, outdoor scenery, and the beauty of nature through the lens.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    tag: "Leisure",
    featured: false,
    description:
      "Unwinding with competitive and story-driven games that challenge strategy and quick thinking.",
  },
  {
    title: "Music",
    icon: Music,
    tag: "Chill",
    featured: false,
    description:
      "Listening to OPM reggae, hip-hop, and chill tracks from artists like Guddhist, Chocolate Factory, and more while coding.",
  },
  {
    title: "Coffee",
    icon: Coffee,
    tag: "Daily Ritual",
    featured: false,
    description:
      "Enjoying a fresh cup of coffee outdoors to recharge, clear my head, and brainstorm new backend ideas.",
  },
];

export default function Hobbies() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 space-y-10">
      {/* Header Section matching About, Education, and Contact */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
          <Sparkles className="h-4 w-4" />
          <span>Beyond the Terminal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Hobbies & Interests
        </h1>
        <p className="text-muted-foreground mt-2 max-w-xl">
          How I recharge, stay active, and find inspiration away from the keyboard.
        </p>
      </div>

      {/* Bento-Style Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card
              key={hobby.title}
              className={`shadow-sm border-muted transition-all hover:border-primary/40 hover:shadow-md ${
                hobby.featured ? "sm:col-span-2 lg:col-span-2 bg-primary/[0.02]" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{hobby.title}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="text-xs font-normal">
                    {hobby.tag}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}