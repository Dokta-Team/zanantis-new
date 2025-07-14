import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Lightbulb, Network, Sparkles, Users, Building2, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30 text-lg px-6 py-2">
              The Future of Healthcare in Africa
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-blue-300 bg-clip-text text-transparent leading-tight">
              Zanantis
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-blue-200 font-light">Inspire. Innovate. Integrate.</p>
            <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Zanantis is focused on inspiring change by providing accessible healthcare and empowering communities
              across Africa through innovative commercial solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" asChild>
                <Link href="/contact">
                  Join Our Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-300 hover:bg-blue-600/10 px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950/50 to-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on three core pillars that drive meaningful change in healthcare delivery
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Inspire</h3>
                <p className="text-gray-300 leading-relaxed">
                  Zanantis is focused on inspiring change by providing accessible healthcare and empowering communities
                  across Africa.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Integrate</h3>
                <p className="text-gray-300 leading-relaxed">
                  We aggregate healthcare businesses, leveraging local and foreign partnerships to create a healthcare
                  ecosystem based on shared commercial interests.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Innovate</h3>
                <p className="text-gray-300 leading-relaxed">
                  We challenge traditional healthcare norms by taking a commercial approach that integrates technology
                  and business partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                Transforming Healthcare in Africa
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At Zanantis Inc., we believe healthcare should be a transformative force in people's lives. We're
                breaking down barriers and creating sustainable solutions for communities across Africa.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Accessible Healthcare
                </Badge>
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Community Empowerment
                </Badge>
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Commercial Innovation
                </Badge>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-blue-300 mb-2">Healthcare Centers</h3>
                  <p className="text-sm text-gray-300">Physical and virtual centers providing free consultations</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-blue-300 mb-2">Business Network</h3>
                  <p className="text-sm text-gray-300">Connecting businesses with new customers and opportunities</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Network className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-blue-300 mb-2">Strategic Partnerships</h3>
                  <p className="text-sm text-gray-300">Collaborating with local and international organizations</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-blue-300 mb-2">Global Reach</h3>
                  <p className="text-sm text-gray-300">Operations across Nigeria, Kenya, Ghana, and the US</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950/50 to-slate-900/50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join us in transforming healthcare across Africa. Whether you're an individual, business, or global
              partner, there's a place for you in our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" asChild>
                <Link href="/partnerships">
                  Explore Partnerships
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-300 hover:bg-blue-600/10 px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
