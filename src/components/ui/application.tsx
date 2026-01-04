import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Section } from "../../components/site/section";
import { applications } from "../../lib/data";
import { motion, type Variants } from 'framer-motion';
// import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
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
export default function Applications() {
  return (
    <Section id="applications" className="bg-background">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          From Automobile to Consumer Goods, a wide range of applications for
          every manufacturing
        </h2>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >

        {applications.map((app, index) => (
          <motion.div
            variants={itemMotion}
            key={index}
            className="relative rounded-2xl p-[2px]  transition-all
             before:absolute before:inset-0 before:rounded-2xl 
             before:bg-gradient-to-r before:from-[#f75bc3] before:via-[#7c3aed] before:to-[#91316b]
             before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 transition-transform duration-300 hover:-translate-y-2"
          >

            <Card
              key={index}
              className="relative flex flex-col overflow-hidden z-10 bg-card rounded-[15px]"
            >
              <CardHeader className="flex-grow p-6">
                <CardTitle className="font-headline text-xl">
                  {app.title}
                </CardTitle>
                <CardDescription className="mt-2 flex-grow text-base text-foreground/70">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-6 pt-0">
                <div className="relative aspect-square w-full">
                  <video
                    src={app.video}
                    className="rounded-md object-contain"
                    muted
                    autoplay
                    // size="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

    </Section>
  );
}
