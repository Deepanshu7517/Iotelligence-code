import { Section } from "../../components/site/section";
import { clients } from "../../lib/data";
export default function ClientBelt() {
  const allClients = [...clients, ...clients];

  return (
    <Section className="py-12 md:py-16 bg-secondary/50">
      <style jsx>{`
              .marque {
                display: flex;
                width: max-content;
                animation: scroll 55s linear infinite;
              }
      
              @keyframes scroll {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-50%);
                }
              }
            `}</style>
      <div className="relative w-full overflow-hidden">
        {/* Marquee Container */}
        <div className="marque flex gap-24">
          {/* 1st batch */}
          <div className="flex gap-24">
            {allClients.map((tech, index) => {
              console.log(tech);
              return (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center whitespace-nowrap text-lg font-semibold text-foreground/60"
                >
                  <img className={`${tech.name === "Subros" ? "h-12" : null}`} src={tech.logo} alt={tech.name} srcset="" />
                </div>
              )
            })}
          </div>

          {/* 2nd batch (duplicate for infinite loop) */}
          <div className="flex gap-24" aria-hidden="true">
            {allClients.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center whitespace-nowrap text-lg font-semibold text-foreground/60"
              >
                <img className={`${tech.name === "Subros" ? "h-12" : null}`} src={tech.logo} alt={tech.name} srcset="" />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
      </div>

    </Section>
  );
}
