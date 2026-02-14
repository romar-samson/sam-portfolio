import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavbarProps {
  navItems: NavItem[];
  className?: string;
}

export function FloatingNavbar({ navItems, className }: FloatingNavbarProps) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed left-1/2 top-6 z-50 -translate-x-1/2",
        className
      )}
    >
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/80 px-4 py-2 backdrop-blur-md">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </motion.div>
  );
}
