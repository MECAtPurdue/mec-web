const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="min-h-svh container max-w-md mx-auto px-4 pt-20 space-y-4 flex flex-col">
    {children}
  </div>
);

export default AuthLayout;
