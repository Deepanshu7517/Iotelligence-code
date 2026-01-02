import { useState } from "preact/hooks";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { useIotelligenceData } from "../lib/iotelligence-assets-data";

export default function CameraSolutions() {
  const { loading, projects } = useIotelligenceData();
  const [activeCategory, setActiveCategory] = useState("All");

  if (loading) return null;

  /* ------------------ categories ------------------ */
  const categories = [
    "All",
    ...Array.from(new Set(projects.map(p => p.category))),
  ];

  /* ------------------ filtering ------------------ */
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* CATEGORY TABS */}
      <Tabs
        value={activeCategory}
        onValueChange={setActiveCategory}
        className="mb-8"
      >
        <TabsList className="flex h-auto flex-wrap justify-center">
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="relative aspect-video w-full">
                <img
                  src={
                    project.media.images[0] ||
                    `https://picsum.photos/seed/${index + 30}/400/300`
                  }
                  alt={project.title}
                  className="h-56 w-full rounded-t-lg object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>

              <CardTitle className="mt-4 pt-2">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/80">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
