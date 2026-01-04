import { Section } from "../../components/site/section";
import { Card, CardContent } from "../../components/ui/card";
import { industries } from "../../lib/data";
import { motion, type Variants } from 'framer-motion';
const itemMotion: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0,
      ease: "easeOut" as any, // 👈 TypeScript fix
    },
  },
};
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
export default function IndustriesServed() {
  return (
    <Section id="industries-served">
      <motion.div className="mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Industries served
        </h2>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6"
      >

        {industries.map((industry, index) => (
          <motion.div
            variants={itemMotion}
            key={index}
            className="relative rounded-2xl  transition-all
             before:absolute before:inset-0 before:rounded-2xl 
             before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 transition-transform duration-300 hover:-translate-y-2"
          >

            <Card
              key={index}
              className="group relative overflow-hidden rounded-lg bg-secondary transition-all hover:shadow-lg"
            >
              <CardContent className="flex items-center gap-4 p-4 md:p-6">
                <div className="rounded-md bg-foreground/5 p-3 transition-colors group-hover:bg-foreground/10">
                  <industry.icon className="h-8 w-8 text-foreground/80 transition-colors group-hover:text-foreground" />
                </div>
                <p className="font-semibold text-foreground/90">{industry.title}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
