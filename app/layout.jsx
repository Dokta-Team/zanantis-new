import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "./components/header"
import { Footer } from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zanantis - The Future of Healthcare in Africa",
  description:
    "Inspire. Innovate. Integrate. Transforming healthcare across Africa through accessible solutions and community empowerment.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black text-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
