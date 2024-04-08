import { Inter } from "next/font/google";
//import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reviews | Riyas",
  description: "Users Can give Review about Riyas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-blue-400'}>
        <header className=" bg-white">
            <h3>Riyas</h3>
        </header>
        {children}</body>
    </html>
  );
}
