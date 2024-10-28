"use client";

import { useAuth } from "@/lib/firebase/useAuth";
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
  const { user } = useAuth();

  return (
    <DropdownMenu modal={false}>
      {/* Hamburger menu button for mobile */}
      <DropdownMenuTrigger className="md:hidden">
        <HamburgerMenuIcon className="h-6 w-6" />
      </DropdownMenuTrigger>
      {/* Mobile menu dropdown */}
      <DropdownMenuContent sideOffset={12} align="end" className="md:hidden">
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
        {!user && (
          <DropdownMenuItem>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60 block w-full"
              href="/login"
            >
              Login
            </Link>
          </DropdownMenuItem>
        )}
        {user && (
          <DropdownMenuItem>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60 block w-full"
              href="/account"
            >
              Account
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Navigation;
