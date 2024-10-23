import Link from "next/link";

import { Button } from "@/components/ui/button";

import links from "./links.json";

const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-4 lg:gap-6">
      {links.map(([title, link]) => (
        <Link
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href={link}
          key={title}
        >
          {title}
        </Link>
      ))}
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </nav>
  );
};

export default Navigation;
