import { Inter } from "next/font/google";
import "../app/shared/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "nexmarket",
  description: "Creating a full-stack nexmarket using nextjs and mySql",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
