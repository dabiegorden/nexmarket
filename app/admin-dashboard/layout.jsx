import {
  AdminDashboardFooter,
  AdminDashboardNavbar,
  AdminSidebar,
} from "@/app/shared";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* [#151c2c] */}
        {/* bg-[#182237] */}
        <main className="flex">
          <div className="flex-1 bg-blue-700 pl-[10px] pt-[18px] pr-[20px]">
            <AdminSidebar />
          </div>

          <div className="flex-[4] p-[18px]">
            <AdminDashboardNavbar />
            {children}
            <AdminDashboardFooter />
          </div>
        </main>
      </body>
    </html>
  );
}
