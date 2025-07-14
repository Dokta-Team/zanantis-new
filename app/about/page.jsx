import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ArrowRight, Target, Eye, Award, Users, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30 text-lg px-6 py-2">Our Story</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent leading-tight">
              Founded to Drive Meaningful Change
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Zanantis Inc., our foundation was built on the belief that healthcare should not only be a service but
              a transformative force in people's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950/50 to-slate-900/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-blue-300">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To inspire change by providing accessible healthcare and empowering communities across Africa through
                  innovative commercial solutions that focus on commercialization, optimization, and efficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-blue-300">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To create a sustainable healthcare ecosystem across Africa where quality healthcare is accessible to
                  all, businesses thrive through meaningful partnerships, and communities are empowered to achieve
                  better health outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                Transforming Healthcare with a Bold New Approach
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We recognized the barriers many communities face in accessing quality healthcare, particularly in
                Africa, where infrastructure and resources are limited. This realization inspired us to create a company
                dedicated to bridging these gaps.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Traditional healthcare models are often unable to address commercial and business requirements in
                addressing the unique challenges of African communities. At Zanantis Inc., we challenge these
                traditional norms by taking a commercial approach to healthcare delivery.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our model integrates technology, corporate involvement, and business partnerships in a win-win model
                that generates revenue for healthcare businesses and ensures speedy access for individuals.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600/20 to-slate-800/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-blue-300 text-lg">Compassionate Care</p>
                  <p className="text-gray-300">Commercial Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-950/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Rooted in Compassion, Comprehensive Care, and Commercial Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our values guide everything we do, from patient care to business partnerships
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Compassion</h3>
                <p className="text-gray-300 leading-relaxed">
                  We treat each client with respect, dignity, and understanding. Compassionate care goes beyond
                  diagnosing and treating illness - it's about making patients feel heard, supported, and valued.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Comprehensive Care</h3>
                <p className="text-gray-300 leading-relaxed">
                  We provide comprehensive healthcare services that span prevention, diagnosis, treatment, and follow-up
                  care, ensuring continuity and quality at every step of the patient journey.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Commercial Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  We integrate commercial strategies that allow us to offer healthcare services sustainably while
                  creating value for businesses and ensuring accessibility for communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Our Growing Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expanding across Africa and creating meaningful change in healthcare delivery
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-300 mb-2">4</h3>
              <p className="text-gray-300">Countries</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-300 mb-2">10,000+</h3>
              <p className="text-gray-300">Lives Impacted</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-300 mb-2">50+</h3>
              <p className="text-gray-300">Partner Organizations</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-300 mb-2">95%</h3>
              <p className="text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950/50 to-slate-900/50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join us in creating lasting change across Africa. Together, we can build a healthier, more prosperous
              future for communities everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" asChild>
                <Link href="/partnerships">
                  Partner With Us
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
