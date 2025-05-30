import { Kanit, Nunito } from "next/font/google";
import { SessionProviders } from "./sessionProvider";
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
    <SessionProviders>
      <html lang="en">
        <head>
          <link rel="icon" href="/logoCompany/com-1.png" />
        </head>
        <body className={`${nunito.variable} ${kanit.variable} antialiased`}>
          <Providers>
            <div className="flex flex-col items-center justify-center w-full min-h-screen gap-2">
              {children}
            </div>
          </Providers>
        </body>
      </html>
    </SessionProviders>
  );
}
