import { PageLayout } from "./client";
import "./global.css";
import "react-circular-progressbar/dist/styles.css";
import "flag-icons/css/flag-icons.min.css";

export const metadata = {
  title: "EnReach Dashboard",
  description: "EnReach Dashboard",
};

import { Poppins } from "next/font/google"; // Helvetica Neue
import localFont from "next/font/local";
import { cn } from "@nextui-org/react";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--Poppins",
});
const helvetica = localFont({
  variable: "--HelveticaNeue",

  src: [
    {
      path: "./HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
const fonts = [popins, helvetica];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", fonts.map((f) => f.variable).join(" "), "font-Poppins")}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
