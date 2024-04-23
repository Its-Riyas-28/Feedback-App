import { Inter } from "next/font/google";
import JackIcon from '../../components/jackicon';


// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reviews",
  description: "Review app",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <div>
       <JackIcon appTitle={'Riyas bro'}/>
       </div>
      {children}
      </div>
            
  );
}
