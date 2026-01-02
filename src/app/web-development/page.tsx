import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiFlask,
  SiExpress,
  SiPreact,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiRedux,
} from "react-icons/si";
import Header from "../../components/site/header";
import Footer from "../../components/site/footer";
import { Section, SectionHeading } from "../../components/site/section";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { productDashboards } from "../../lib/data";
import { TiltCard } from "../../components/site/tilt-card";

const technologies = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Redux", icon: SiRedux },
  { name: "Zustand", icon: null },
  { name: "Preact", icon: SiPreact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Express.js", icon: SiExpress },
  { name: "Flask", icon: SiFlask },
  { name: "MS SQL Server", icon: null },
];

function TechIcon({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.ElementType | null;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      {Icon ? (
        <Icon className="h-12 w-12" />
      ) : (
        <div className="flex h-12 w-12 items-center justify-center text-3xl font-bold text-muted-foreground">
          ?
        </div>
      )}
      <span className="text-sm text-foreground/80">{name}</span>
    </div>
  );
}

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="bg-secondary/50 pt-24">
          <SectionHeading title="Web Development Services" />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-foreground/80">
              We build modern, responsive, and high-performance websites and web
              applications that are tailored to meet your specific business
              objectives. From sleek marketing sites to complex enterprise
              platforms, our team leverages cutting-edge technologies to deliver
              exceptional digital experiences. We focus on creating scalable,
              secure, and user-friendly solutions that drive engagement and
              deliver results.
            </p>
          </div>
        </Section>
        <Section>
          <SectionHeading title="Technologies We Use" />
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            {technologies.map((tech) => (
              <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </Section>
        <Section className="bg-secondary/50">
          <SectionHeading title="Product Overview Dashboards" />
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-foreground/80">
            We specialize in creating intuitive and powerful overview dashboards
            that provide a comprehensive, at-a-glance view of your product's key
            metrics and performance indicators. Our dashboards are designed to
            transform complex data into actionable insights, enabling
            stakeholders to make informed decisions quickly.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productDashboards.map((dashboard, index) => (
              <TiltCard key={index}>
                <Card className="h-full overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video w-full">
                      <img
                        src={dashboard.image}
                        alt={dashboard.title}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        data-ai-hint={dashboard.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-lg font-semibold">
                      {dashboard.title}
                    </CardTitle>
                    <p className="mt-2 text-foreground/80">
                      {dashboard.description}
                    </p>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
