import { ContactForm } from "../components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Building2,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30 text-lg px-6 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent leading-tight">
              Let's Create Lasting Impact Together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform healthcare in Africa? Whether you're an
              individual, business, or global partner, we're here to help you
              make a meaningful difference.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950/50 to-slate-900/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                How Can We Help You?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                The journey to transforming healthcare in Africa requires
                collaboration, innovation, and shared commitment. Your
                involvement can help us amplify our impact and make a real
                difference.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300 mb-2">
                      For Individuals
                    </h3>
                    <p className="text-gray-300">
                      Access free healthcare consultations and join our mission
                      to improve healthcare access across Africa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300 mb-2">
                      For Businesses
                    </h3>
                    <p className="text-gray-300">
                      Partner with us to expand your reach while making a
                      meaningful impact in healthcare delivery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300 mb-2">
                      For Global Partners
                    </h3>
                    <p className="text-gray-300">
                      Leverage our network and innovative solutions to create
                      greater social and economic value.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-4">
                  Response Times
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Partnership Inquiries</span>
                    <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                      24 hours
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Healthcare Services</span>
                    <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                      Same day
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">General Inquiries</span>
                    <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                      48 hours
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with us directly at any of our locations across Africa and
              the United States
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-400 mr-2" />
                  <h3 className="text-lg font-bold text-blue-300">
                    United States
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    7766 Blueberry Hill Lane
                    <br />
                    Ellicott City, MD 21043
                  </p>
                  <div className="flex items-center text-blue-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>EST Business Hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-400 mr-2" />
                  <h3 className="text-lg font-bold text-blue-300">Nigeria</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    1A, Ibikunle Street
                    <br />
                    Yaba, Lagos
                  </p>
                  <div className="flex items-center text-blue-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>WAT Business Hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-400 mr-2" />
                  <h3 className="text-lg font-bold text-blue-300">Kenya</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    Blk 6, High rise Estate
                    <br />
                    Mbagathi Way, Nairobi
                  </p>
                  <div className="flex items-center text-blue-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>EAT Business Hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-400 mr-2" />
                  <h3 className="text-lg font-bold text-blue-300">Ghana</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    No 4, Obese Jecty Crescent
                    <br />
                    Cape Coast
                  </p>
                  <div className="flex items-center text-blue-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>GMT Business Hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Contact Options */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-950/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Prefer Direct Contact?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Reach out to our specialized teams for faster assistance with your
              specific needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-300 mb-2">
                  Partnership Inquiries
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Connect with our partnership team for collaboration
                  opportunities
                </p>
                <div className="flex items-center justify-center text-blue-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">partnerships@zanantis.com</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-300 mb-2">
                  Healthcare Services
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Get immediate assistance with healthcare consultations and
                  services
                </p>
                <div className="flex items-center justify-center text-blue-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">healthcare@zanantis.com</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-300 mb-2">
                  General Information
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  For general questions and information about our services
                </p>
                <div className="flex items-center justify-center text-blue-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">info@zanantis.com</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
