import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  Network,
  Heart,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Shield,
  Stethoscope,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30 text-lg px-6 py-2">
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent leading-tight">
              Comprehensive Healthcare Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Rooted in compassion, comprehensive care, and commercial
              innovation - we provide integrated healthcare solutions that
              empower communities and businesses across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950/50 to-slate-900/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-blue-300">
                    Healthcare Centers
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our healthcare centers serve as beacons of hope for
                  individuals who might otherwise have limited access to medical
                  care. At our physical and virtual centers, individuals receive
                  timely diagnosis and care, preventing more serious health
                  issues down the line.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">
                      Free medical consultations
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">
                      Physical and virtual centers
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">
                      Timely diagnosis and treatment
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">
                      Preventive care programs
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-600/20 rounded-lg p-4 text-center">
                    <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-blue-300 font-semibold">
                      24/7 Access
                    </p>
                    <p className="text-xs text-gray-300">
                      Virtual consultations
                    </p>
                  </div>
                  <div className="bg-blue-600/20 rounded-lg p-4 text-center">
                    <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-blue-300 font-semibold">
                      Quality Care
                    </p>
                    <p className="text-xs text-gray-300">
                      Certified professionals
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-blue-300">
                    Business Network
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our extensive network of healthcare companies benefits not
                  only individuals seeking care, but also businesses looking to
                  expand their customer base. Through our virtual commercial
                  platform, we create opportunities for businesses across
                  various sectors.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">
                      Virtual commercial platform
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">
                      Customer base expansion
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">
                      Mutually beneficial relationships
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">
                      Market access solutions
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-600/20 rounded-lg p-4 text-center">
                    <Network className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-blue-300 font-semibold">
                      Wide Reach
                    </p>
                    <p className="text-xs text-gray-300">Pan-African network</p>
                  </div>
                  <div className="bg-blue-600/20 rounded-lg p-4 text-center">
                    <Globe className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-blue-300 font-semibold">
                      Global Partners
                    </p>
                    <p className="text-xs text-gray-300">
                      International connections
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Referral System */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Our Stellar Referral System
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Free consultations tied to our comprehensive referral system that
              allows patients to identify and access the right services in a
              cost-effective manner.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Initial Consultation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Free initial consultation to assess your healthcare needs and
                  determine the best course of action.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Smart Matching
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our system matches you with the most appropriate healthcare
                  providers and services based on your specific needs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Ongoing Support
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Continuous support and follow-up to ensure you receive the
                  best possible care throughout your healthcare journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-950/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Where We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services are available across multiple countries, with plans
              for continued expansion across Africa.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-blue-300 mb-2">
                  Nigeria
                </h3>
                <p className="text-sm text-gray-300 mb-2">
                  Lagos Operations Center
                </p>
                <p className="text-gray-300">
                  1A, Ibikunle Street
                  <br />
                  Yaba, Lagos
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-blue-300 mb-2">Kenya</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Nairobi Service Hub
                </p>
                <p className="text-gray-300">
                  Blk 6, High rise Estate
                  <br />
                  Mbagathi Way, Nairobi
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-blue-300 mb-2">Ghana</h3>
                <p className="text-sm text-gray-300 mb-2">Cape Coast Center</p>
                <p className="text-gray-300">
                  No 4, Obese Jecty Crescent
                  <br />
                  Cape Coast
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-blue-300 mb-2">
                  United States
                </h3>
                <p className="text-sm text-gray-300 mb-2">
                  Maryland Headquarters
                </p>
                <p className="text-gray-300">
                  7766 Blueberry Hill Lane
                  <br />
                  Ellicott City, MD 21043
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Ready to Access Quality Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you need healthcare services or want to partner with us to
              expand your business reach, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-300 hover:bg-blue-600/10 px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/partnerships">Explore Partnerships</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
