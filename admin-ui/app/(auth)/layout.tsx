export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <body className="flex items-center justify-center h-full">
        {children}
      </body>
    </div>
  );
}
