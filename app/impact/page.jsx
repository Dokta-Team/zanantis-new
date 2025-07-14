import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Globe,
  TrendingUp,
  Heart,
  Building2,
  Award,
  ArrowRight,
  CheckCircle,
  MapPin,
  Stethoscope,
  Network,
} from "lucide-react"
import Link from "next/link"

export default function ImpactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30 text-lg px-6 py-2">Our Impact</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent leading-tight">
              Creating Lasting Change Across Africa
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From expanding healthcare access to empowering businesses and communities, discover how Zanantis is
              transforming lives across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950/50 to-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to transformation is reflected in the tangible results we've achieved across Africa
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-blue-300 mb-2">50,000+</h3>
                <p className="text-gray-300">Lives Impacted</p>
                <p className="text-sm text-blue-400 mt-2">Across 4 countries</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-blue-300 mb-2">25,000+</h3>
                <p className="text-gray-300">Free Consultations</p>
                <p className="text-sm text-blue-400 mt-2">Provided annually</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-blue-300 mb-2">200+</h3>
                <p className="text-gray-300">Business Partners</p>
                <p className="text-sm text-blue-400 mt-2">In our network</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-blue-300 mb-2">95%</h3>
                <p className="text-gray-300">Success Rate</p>
                <p className="text-sm text-blue-400 mt-2">Patient satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Areas of Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive approach creates positive change across multiple dimensions of healthcare and business
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300">Healthcare Access</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Breaking down barriers to quality healthcare through our network of centers and virtual platforms,
                  ensuring no one is left behind.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Free medical consultations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Preventive care programs
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Emergency response systems
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Health education initiatives
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300">Economic Empowerment</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Creating sustainable economic opportunities for businesses while improving healthcare outcomes for
                  communities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Business network expansion
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Revenue generation for partners
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Job creation in healthcare
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Skills development programs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300">Community Building</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Strengthening communities through collaborative healthcare initiatives and sustainable partnership
                  models.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Community health programs
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Local partnership development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Healthcare infrastructure
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Capacity building initiatives
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Impact */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-950/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Regional Impact Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our work is transforming healthcare delivery across different regions in Africa
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-blue-300">West Africa Impact</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-600/10 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-2">Nigeria Operations</h4>
                    <p className="text-gray-300 text-sm">
                      Established 15 healthcare centers in Lagos, providing over 12,000 free consultations annually and
                      partnering with 80+ local businesses.
                    </p>
                  </div>
                  <div className="bg-blue-600/10 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-2">Ghana Expansion</h4>
                    <p className="text-gray-300 text-sm">
                      Launched comprehensive referral system in Cape Coast, connecting 5,000+ patients with specialized
                      care and reducing healthcare costs by 40%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-blue-300">East Africa Impact</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-600/10 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-2">Kenya Operations</h4>
                    <p className="text-gray-300 text-sm">
                      Implemented virtual healthcare platform in Nairobi, serving 8,000+ patients remotely and creating
                      partnerships with 60+ healthcare providers.
                    </p>
                  </div>
                  <div className="bg-blue-600/10 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-2">Regional Network</h4>
                    <p className="text-gray-300 text-sm">
                      Built cross-border healthcare network enabling patient referrals and knowledge sharing between
                      countries, improving care quality by 35%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Our Vision for the Future
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're just getting started. Here's how we plan to scale our impact across Africa and beyond
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Pan-African Expansion</h3>
              <p className="text-gray-300 leading-relaxed">
                Expand to 15 African countries by 2027, creating a comprehensive healthcare network that serves 1
                million+ people annually.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Technology Integration</h3>
              <p className="text-gray-300 leading-relaxed">
                Leverage AI and telemedicine to provide advanced diagnostic capabilities and connect rural communities
                with specialist care.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Sustainable Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                Build self-sustaining healthcare ecosystems that continue to grow and serve communities long-term
                without external dependency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950/50 to-slate-900/50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Be Part of Our Growing Impact
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of individuals, businesses, and organizations who are already making a difference in
              African healthcare. Together, we can create lasting change.
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
                <Link href="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
