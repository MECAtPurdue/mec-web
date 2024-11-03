import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

type MenuLink = [string, string];

const adminPages: Array<MenuLink> = [
  ["Users", "/admin/users"],
  ["Events", "/admin/events"],
];

const MenuItem: React.FC<{ title: string; href: string }> = ({
  title,
  href,
}) => (
  <NavigationMenuItem>
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {title}
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
);

const MenuBar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <NavigationMenu className={className}>
        {adminPages.map(([title, href]) => (
          <NavigationMenuList>
            <MenuItem title={title} href={href} />
          </NavigationMenuList>
        ))}
      </NavigationMenu>
    </>
  );
};

export default MenuBar;
