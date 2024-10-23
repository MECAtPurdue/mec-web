"use client";

import Link from "next/link";

import links from "./links.json";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navigation = () => {
  return (
    <DropdownMenu modal={false}>
      {/* Hamburger menu button for mobile */}
      <DropdownMenuTrigger className="md:hidden">
        <HamburgerMenuIcon className="h-6 w-6" />
      </DropdownMenuTrigger>
      {/* Mobile menu dropdown */}
      <DropdownMenuContent sideOffset={12} align="end">
        {links.map(([title, link]) => (
          <DropdownMenuItem key={title}>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60 block w-full"
              href={link}
            >
              {title}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60 block w-full"
            href="/login"
          >
            Login
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Navigation;
