import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";

// Configure fonts
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});

export const metadata = {
  title: "Fast Link",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>
        {/* Bebas Neue for headings */}
        <div className={outfit.className}>{children}</div>
      </body>
    </html>
  );
}
