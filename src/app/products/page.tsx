import { motion, type Variants } from "framer-motion";
import { Section, SectionHeading } from "../../components/site/section";
import Header from "../../components/site/header";
import Footer from "../../components/site/footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  ArrowRight,
  Activity,
  Route,
  Settings,
  Plug,
  Battery,
  Check,
} from "lucide-preact";
// import { PlaceHolderImages } from "../../lib/placeholder-images";
import ModernCursor from "../../components/site/modernCursor";
import {
  digitalOperations,
  transformationSteps,
  smartPeopleLayers,
  eolFeatures,
  traceabilityGoals,
  oeeFeatures,
  energyBenefits
} from "../../lib/data"
import { useIotelligenceData } from "../../lib/iotelligence-assets-data";
import { useState } from "preact/hooks";
const categories = ["camera-based", "dashboard"];

export default function SolutionsPage() {
  const { loading, projects } = useIotelligenceData();
  const [activeCategory, setActiveCategory] = useState<"camera-based" | "dashboard">("camera-based");
  if (loading) return <div className="flex h-screen items-center justify-center">Loading Solutions...</div>;
  // const caseImages = PlaceHolderImages.filter((p) =>
  //   p.id.startsWith("project-")
  // );

  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between child animations
        delayChildren: 0.3, // optional
      },
    },
  };

  const itemMotion: Variants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as any, // 👈 TypeScript fix
      },
    },
  };

  return (
    <>
      <ModernCursor />
      <Header />
      <main>
        <Section className="md:py-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              title="Our Solutions"
              subtitle="Driving Digital Transformation"
            />
          </motion.div>
          <div className="grid gap-16">
            <div id="digital-operations">
              <motion.h3
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8 text-center font-headline text-2xl font-bold"
              >
                Digital Operations Focus
              </motion.h3>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {digitalOperations.map((item: any, index: any) => (
                  <motion.div key={index} variants={itemMotion}>
                    <Card
                      key={index}
                      className="text-center hover:scale-105 transition-all duration-300"
                    >
                      <CardHeader>
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              id="digital-transformation"
              className="text-center"
            >
              <h3 className="mb-8 font-headline text-2xl font-bold">
                Digital Transformation Framework
              </h3>
              <p className="mb-4 text-lg text-foreground/80">
                Our journey from data to value:
              </p>
              <div className="relative mb-16 flex flex-wrap items-center justify-center gap-4 md:gap-8">
                {transformationSteps.map((step, index) => {
                  const isLast = index === transformationSteps.length - 1;

                  return (
                    <motion.div
                      key={step}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }} // 👈 animate only once, when 30% visible
                      transition={{
                        duration: 0.45,
                        delay: index * 0.25,
                        ease: "easeOut",
                      }}
                    >
                      {/* CARD */}
                      <motion.div
                        className="rounded-xl border bg-card p-4 px-6 text-center shadow-md relative"
                        initial={{ scale: 0.9, rotate: -2 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.25 + 0.05,
                          ease: "easeOut",
                        }}
                        style={{
                          transform:
                            index > 0 ? "translateX(-12px)" : "translateX(0px)",
                        }}
                      >
                        <span className="font-semibold whitespace-nowrap">
                          {step}
                        </span>
                      </motion.div>

                      {/* ARROW — Hidden on mobile */}
                      {!isLast && (
                        <motion.div
                          className="hidden md:flex"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.25 + 0.15,
                          }}
                        >
                          <ArrowRight className="mx-2 h-7 w-7 text-primary" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <div className="mx-auto max-w-4xl">
                <h4 className="mb-6 font-headline text-xl font-bold">
                  Smart People Approach
                </h4>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {smartPeopleLayers.map((layer, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <p className="text-center font-semibold">{layer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <p className="mt-12 text-lg text-foreground/80">
                We build an end-to-end digital ecosystem with integrated and
                contextualized data.
              </p>
            </motion.div>
          </div>
        </Section>
        <Section id="camera-solutions" className="bg-secondary/50">
          <SectionHeading
            title="Industrial Based Solutions"
            subtitle="Our Use Cases"
          />
          <Tabs value={activeCategory} onValueChange={setActiveCategory as any} className="w-full mb-8">
            <TabsList className="flex h-auto flex-wrap md:h-10">
              {categories.map((category) => (
                <TabsTrigger className={"w-1/2"} key={category} value={category}>{category.toUpperCase()}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;

              // Pick first image or video thumbnail
              const previewImage =
                project.media.images?.find(img => img.includes("main")) ?? null;
              const previewVideo = 
                project.media.videos?.find(img => img.includes("main")) ?? null;

              if (project.category !== activeCategory) {
                return
              }
              return (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="relative aspect-video w-full">
                      {previewImage &&
                        <img
                          src={previewImage}
                          alt={project.title}
                          className="h-56 w-full rounded-t-lg object-cover"
                          data-ai-hint={project.imageHint}
                        />
                      }
                      {previewVideo &&
                        <video
                          src={previewVideo}
                          autoplay
                          muted
                          className="h-56 w-full rounded-t-lg object-cover"
                          data-ai-hint={project.imageHint}
                        />
                      }
                    </div>

                    <CardTitle className="mt-4 flex items-center gap-2 pt-2">
                      {Icon && <Icon className="h-6 w-6 text-primary" />}
                      <span>{project.title}</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="mb-4 text-sm text-foreground/80">
                      {project.description}
                    </p>

                    <ul className="space-y-2 grid lg:grid-cols-2">
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-foreground/80">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Section>

        <Section id="technology">
          <SectionHeading title="Our Technology" />

          <Tabs defaultValue="eol" className="w-full">
            <TabsList className="h-auto flex-wrap justify-around md:flex">
              <TabsTrigger value="eol">EOL Testing</TabsTrigger>
              <TabsTrigger value="traceability">Part Traceability</TabsTrigger>
              <TabsTrigger value="oee">OEE Dashboard</TabsTrigger>
              <TabsTrigger value="connectivity">
                Machine Connectivity
              </TabsTrigger>
              <TabsTrigger value="energy">Energy Management</TabsTrigger>
            </TabsList>
            <TabsContent value="eol" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-6 w-6 text-primary" />
                    EOL Testing Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground/80">
                    Visualization dashboard for End of Line testing with a
                    real-time monitoring interface, alarms and notifications,
                    and control limits tracking.
                  </p>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
                    {eolFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="traceability" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Route className="h-6 w-6 text-primary" />
                    Part Traceability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 font-semibold">Goals:</p>
                  <ul className="mb-6 grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
                    {traceabilityGoals.map((goal, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mb-2 font-semibold">Process Flow:</p>
                  <p className="rounded-md bg-muted p-4 text-sm text-foreground/80">
                    Parts Production → QR Code generation and pasting on
                    crates/SFG → Outward Scanning on dispatch → All Processes →
                    Parts Received for Assembly → Issue Observed (Record
                    Critical Parameters, Check and validate process-specific
                    details to identify batch)
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="oee" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-6 w-6 text-primary" />
                    OEE Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground/80">
                    16 Major Loss capturing according to TPM, real-time OEE
                    monitoring, and performance/quality monitoring with
                    real-time SPC calculation.
                  </p>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
                    {oeeFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="connectivity" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plug className="h-6 w-6 text-primary" />
                    Machine Connectivity Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Live machine running status dashboard with real-time
                    connectivity monitoring and device status visualization
                    (Green: connected, Red: idle/disconnected) for various
                    machine types including Vertical IMM, Horizontal IMM, Rotary
                    IMM, VMC, etc.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="energy" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Battery className="h-6 w-6 text-primary" />
                    Energy Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground/80">
                    Monitor overall energy consumption (in kWh) with a real-time
                    analysis dashboard, hourly tracking, and area-wise
                    breakdown.
                  </p>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
                    {energyBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </Section>
      </main>
      <Footer />
    </>
  );
}
