import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Providers } from "../components/sections";
import dynamic from "next/dynamic";

const IRANSansX = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSansX/IRANSansXFaNum-Thin.woff",
      weight: "100"
    },
    {
      path: "../../public/fonts/IRANSansX/IRANSansXFaNum-UltraLight.woff",
      weight: "200"
    },
    {
      path: "../../public/fonts/IRANSansX/IRANSansXFaNum-Light.woff",
      weight: "300"
    },
    {
      path: "../../public/fonts/IRANSansX/IRANSansXFaNum-Regular.woff",
      weight: "400"
    },
    {
      path: "../../public/fonts/IRANSansX/IRANSansXFaNum-Medium.woff",
      weight: "500"
    },
    {
      path: "../../public/fonts/IRANSansX/IRANSansXFaNum-DemiBold.woff",
      weight: "600"
    },
    {
      path: "../../public/fonts/IRANSansX/IRANSansXFaNum-Bold.woff",
      weight: "700"
    },
    {
      path: "../../public/fonts/IRANSansX/IRANSansXFaNum-ExtraBold.woff",
      weight: "800"
    },
    {
      path: "../../public/fonts/IRANSansX/IRANSansXFaNum-Black.woff",
      weight: "900"
    },
  ],
});

const Header = dynamic(() => import('../components/sections/Header'))
const Footer = dynamic(() => import('../components/sections/Footer'))

export const metadata: Metadata = {
  title: "محصولات اینترویو شاپ",
  description: "اینترویو شاپ، یک فروشگاه آنلاین با تمرکز بر آخرین فروش آخرین تکنولوژی های روز است",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${IRANSansX.className} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
