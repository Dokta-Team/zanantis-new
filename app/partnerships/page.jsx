import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Handshake,
  Globe,
  TrendingUp,
  Building2,
  Heart,
  ArrowRight,
  CheckCircle,
  Network,
  Award,
  Target,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function PartnershipsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30 text-lg px-6 py-2">
              Strategic Partnerships
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent leading-tight">
              Multiply Impact Through Strategic Partnerships
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Zanantis Inc. thrives on collaboration and the power of partnerships. Together, we create shared value
              that benefits healthcare providers, businesses, and communities across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950/50 to-slate-900/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                Creating Shared Value Through Collaboration
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We understand that healthcare is a complex system that requires diverse expertise. That's why we partner
                with local organizations, healthcare providers, and multinational companies to maximize the impact of
                our services.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                These strategic partnerships allow us to leverage resources, share knowledge, and expand our reach,
                ultimately benefiting the people we serve and the organizations we work with.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Win-Win Scenarios
                </Badge>
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Shared Resources
                </Badge>
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Expanded Reach
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600/20 to-slate-800/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                <div className="text-center">
                  <Handshake className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-blue-300 text-lg">Strategic Collaboration</p>
                  <p className="text-gray-300">Mutual Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're a local organization, healthcare provider, or multinational company, there's a partnership
              model that fits your goals
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-blue-300">Healthcare Providers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Join our network of healthcare providers to expand your patient base and improve service delivery
                  through our integrated platform.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-gray-300 text-sm">Access to referral network</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-gray-300 text-sm">Increased patient volume</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-gray-300 text-sm">Technology integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-gray-300 text-sm">Professional development</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/contact">Join Network</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-blue-300">Business Partners</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Leverage our extensive network to reach new customers while contributing to meaningful healthcare
                  initiatives across Africa.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-gray-300 text-sm">Market expansion opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-gray-300 text-sm">Brand visibility increase</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-gray-300 text-sm">CSR impact measurement</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-gray-300 text-sm">Revenue generation</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/contact">Explore Partnership</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-blue-300">Global Organizations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Partner with us to create greater social and economic value in Africa through our innovative
                  healthcare solutions and extensive network.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-gray-300 text-sm">Pan-African market access</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-gray-300 text-sm">Local expertise & networks</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-gray-300 text-sm">Impact measurement & reporting</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    <span className="text-gray-300 text-sm">Sustainable development goals</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/contact">Start Collaboration</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-950/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Why Partner With Zanantis?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our partnerships create lasting value for all stakeholders while driving meaningful change in African
              healthcare
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-4">Extensive Network</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Access our growing network of 200+ partners across 4 countries with plans for rapid expansion.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-4">Proven Results</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                95% success rate with measurable impact on healthcare access and business growth for our partners.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-4">Innovation Focus</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Cutting-edge technology and commercial innovation that keeps partners ahead of the curve.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-4">Social Impact</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every partnership contributes to improving healthcare access for underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Partnership Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our partnerships are creating real impact for businesses and communities across Africa
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-blue-300">Healthcare Provider Network</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "Partnering with Zanantis increased our patient volume by 300% while allowing us to focus on quality
                  care. Their referral system is seamless and their support is exceptional."
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-300">300%</p>
                    <p className="text-xs text-gray-300">Patient Increase</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-300">50%</p>
                    <p className="text-xs text-gray-300">Cost Reduction</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-300">95%</p>
                    <p className="text-xs text-gray-300">Satisfaction Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-blue-300">Business Growth Partnership</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "Through Zanantis's network, we reached 10,000+ new customers in markets we couldn't access before.
                  The partnership has been transformative for our business growth in Africa."
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-300">10K+</p>
                    <p className="text-xs text-gray-300">New Customers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-300">150%</p>
                    <p className="text-xs text-gray-300">Revenue Growth</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-300">4</p>
                    <p className="text-xs text-gray-300">New Markets</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950/50 to-slate-900/50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Ready to Create Shared Value?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our growing network of partners who are transforming healthcare across Africa while achieving their
              business goals. Let's create lasting impact together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" asChild>
                <Link href="/contact">
                  Start Partnership Discussion
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-300 hover:bg-blue-600/10 px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
