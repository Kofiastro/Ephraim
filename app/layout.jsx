import { Inter } from "next/font/google"
import "./globals.css";


const inter = Inter({
  subsets: ['latin'],
  weight:['100','200','300','400','500','600','700','800','900']
});


export const metadata = {
  title: "Ephraim Addae Sam — IT Support & Networking",
  description:
    "Portfolio of Ephraim Addae Sam, an IT support and networking professional.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
