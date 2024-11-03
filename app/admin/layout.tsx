"use client";

import Page403 from "@/app/403";
import { useAuth } from "@/lib/firebase/useAuth";
import MenuBar from "@/components/admin/MenuBar";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isAdmin } = useAuth();

  if (!isAdmin) return <Page403 />;

  return (
    <div className="min-h-svh container max-w-xl mx-auto px-4 pt-20 space-y-4 flex flex-col">
      <MenuBar className="w-full" />
      {children}
    </div>
  );
};

export default AdminLayout;
