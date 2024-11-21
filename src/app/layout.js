import "./globals.css";
import Navigation from "@/components/navigation";
import {Inter} from 'next/font/google';

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
        <div className="wrapper">
          <aside className="navigation">
            <div className="flex items-center gap-3 mb-8">
              <img src="https://placehold.co/48x48" alt="Profile Image" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-medium text-gray-800">Monite UG (ha...</p>
                <i className="fas fa-angle-down text-gray-500"></i>
              </div>
            </div>

            <Navigation />

            <div className="mt-auto pt-6">
              <a href="#" className="flex items-center gap-3 text-gray-500 hover:text-gray-700">
                <i className="fas fa-question-circle"></i> Get help
              </a>
            </div>

          </aside>
          <main className="flex-1 bg-white p-8">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
