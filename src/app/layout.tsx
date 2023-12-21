import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "@/styles/layout.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import { assetsPrefix } from "@/utills/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pharmacy Shop online",
  description: "Here you can buy pharmacy products any time any where",
  openGraph: {
    images: `${assetsPrefix}/assets/images/pharmacyshoplogo96.png`,
    url: `https://pharmacyapp.vercel.app`
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
