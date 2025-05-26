import Sidebar from "@/components/modules/sidebar/Sidebar";

export default function WithDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <main className="w-full">
       <nav className="hidden lg:flex bg-gray-100 px-4 py-4 justify-between items-center">
  <h1 className="text-xl font-bold">Dashboard</h1>
</nav>


        <div className="px-4 py-4">
          {children}
        </div>
        </main>
    </div>
  );
}
