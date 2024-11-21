import "./globals.css";
import Navigation from "@/components/navigation";
import {Inter} from 'next/font/google';
import NotificationProvider from "notification-provider";
import NotificationStatus from "@/components/notification-status";
import "@/public/font-awesome/css/font-awesome.min.css";
const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "Monite - Products",
  description: "Using Next.js with Tailwind CSS, by Marcos Riganti",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <NotificationProvider>
          <div className="wrapper">
            <aside className="navigation flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <img src="https://placehold.co/48x48" alt="Profile Image" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-row justify-between items-center gap-4">
                    <p className="font-medium text-gray-800">Monite UG (ha...</p>
                    <i className="fa fa-angle-down text-gray-500"></i>
                  </div>
                </div>
                <Navigation />
              </div>
              <div className="mt-auto pt-6 flex">
                <a href="#" className="flex items-center gap-3 text-gray-500 hover:text-gray-700">
                  <i className="fa fa-question-circle"></i> Get help
                </a>
              </div>
            </aside>
            <main className="flex-1 bg-white p-8">
              {children}
            </main>
          </div>
          <NotificationStatus />
        </NotificationProvider>
      </body>
    </html>
  );
}
