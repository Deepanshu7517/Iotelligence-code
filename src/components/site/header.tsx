import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-preact";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { cn } from "../../lib/utils";
import { navLinks } from "../../lib/data";
import { Logo } from "./logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-6 text-sm font-medium", className)}>
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          onClick={() => setMobileMenuOpen(false)}
          // Added 'group' and 'relative' to the class
          className={({ isActive }) => cn(
            "relative py-1 transition-colors duration-300 group",
            isActive ? "text-foreground" : "text-foreground/80 hover:text-foreground"
          )}
        >
          {link.label}

          {/* THE ANIMATED UNDERLINE */}
          <span
            className={cn(
              "absolute bottom-0 left-0 h-[2px] bg-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              // If active, width is 100%. If not, it's 0 until hovered.
              "w-0 group-hover:w-full"
            )}
          />
        </NavLink>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        "sticky lg:top-3 top-0 m-auto z-50 lg:w-9/12 transition-all duration-300 lg:rounded-xl ",
        scrolled
          ? "border-b border-border/60 bg-white/10 backdrop-blur-sm"
          : ""
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />

        <div className="hidden items-center gap-6 md:flex">
          <NavLinks />
          <Button asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full bg-background sm:max-w-xs"
            >
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <Logo />
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <NavLinks className="flex-col items-start gap-4 text-base" />
                <Button asChild className="mt-8">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
