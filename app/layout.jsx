import { Kanit, Nunito } from "next/font/google";
import { Providers } from "./HeroUIProvider";
import "@/style/globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--kanit",
  weight: "300",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--nunito",
  weight: "300",
  display: "swap",
});

export const metadata = {
  title: "Cis Internal System",
  description: "Development for the Next Generations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logoCompany/com-1.png" />
      </head>
      <body className={`${nunito.variable} ${kanit.variable} antialiased`}>
        <Providers>1 </Providers>
      </body>
    </html>
  );
}
