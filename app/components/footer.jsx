import { Heart, Globe, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-black/50 border-t border-blue-500/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                Zanantis
              </span>
            </div>
            <p className="text-gray-300 mb-4">The Future of Healthcare in Africa</p>
            <p className="text-blue-400 font-semibold">Inspire. Innovate. Integrate.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-300 mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Healthcare Centers</li>
              <li className="text-gray-300">Free Consultations</li>
              <li className="text-gray-300">Business Network</li>
              <li className="text-gray-300">Strategic Partnerships</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-300 mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-center">
                <Globe className="w-4 h-4 mr-2 text-blue-400" />
                www.zanantis.com
              </p>
              <p className="text-gray-300 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                info@zanantis.com
              </p>
              <p className="text-gray-300 flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                +1 781 827 1704
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/20 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zanantis Inc. All rights reserved. Transforming healthcare across Africa.
          </p>
        </div>
      </div>
    </footer>
  )
}
