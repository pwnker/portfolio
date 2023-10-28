import "~/styles/globals.css";

import { Anonymous_Pro } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/navbar";

const anonpro = Anonymous_Pro({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-anon'
});

export const metadata = {
  title: "Tilen Okretič",
  description: "Website dedicated to showcase Tilen Okretič",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${anonpro.variable} bg-gray-50 text-gray-950 relative pt-24 h-screen sm:pt-28`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#00ffaaff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[60rem] rounded-full blur-[10rem] sm:w-[80rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Navbar />
        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
