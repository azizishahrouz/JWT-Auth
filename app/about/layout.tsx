export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">About Section</h1>
      <div className="border rounded-lg p-4 bg-white shadow">
        {children}
      </div>
    </div>
  );
}
