"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "",
    region: "",
    message: "",
    newsletter: false,
    privacy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        inquiryType: "",
        region: "",
        message: "",
        newsletter: false,
        privacy: false,
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.inquiryType &&
    formData.message &&
    formData.privacy

  return (
    <Card className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border-blue-500/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-300 text-center">Get In Touch</CardTitle>
        <p className="text-gray-300 text-center">Ready to make an impact? Let's discuss how we can work together.</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {submitStatus === "success" && (
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <p className="text-green-300">Thank you! We'll get back to you within 24 hours.</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <p className="text-red-300">Something went wrong. Please try again.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-blue-300">
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-blue-300">
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-blue-300">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-blue-300">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Organization */}
          <div className="space-y-2">
            <Label htmlFor="organization" className="text-blue-300">
              Organization/Company
            </Label>
            <Input
              id="organization"
              value={formData.organization}
              onChange={(e) => handleInputChange("organization", e.target.value)}
              className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400"
              placeholder="Your organization name"
            />
          </div>

          {/* Inquiry Type and Region */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-blue-300">Inquiry Type *</Label>
              <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                <SelectTrigger className="bg-slate-800/50 border-blue-500/30 text-white">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-blue-500/30">
                  <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                  <SelectItem value="healthcare-services">Healthcare Services</SelectItem>
                  <SelectItem value="business-network">Business Network</SelectItem>
                  <SelectItem value="investment">Investment Inquiry</SelectItem>
                  <SelectItem value="general">General Information</SelectItem>
                  <SelectItem value="media">Media/Press</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-blue-300">Region of Interest</Label>
              <Select value={formData.region} onValueChange={(value) => handleInputChange("region", value)}>
                <SelectTrigger className="bg-slate-800/50 border-blue-500/30 text-white">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-blue-500/30">
                  <SelectItem value="nigeria">Nigeria</SelectItem>
                  <SelectItem value="kenya">Kenya</SelectItem>
                  <SelectItem value="ghana">Ghana</SelectItem>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="pan-africa">Pan-Africa</SelectItem>
                  <SelectItem value="global">Global</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-blue-300">
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400 min-h-[120px]"
              placeholder="Tell us about your inquiry, partnership ideas, or how you'd like to get involved with Zanantis..."
              required
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => handleInputChange("newsletter", checked)}
                className="border-blue-500/30 data-[state=checked]:bg-blue-600"
              />
              <Label htmlFor="newsletter" className="text-sm text-gray-300 leading-relaxed">
                I would like to receive updates about Zanantis's impact, partnerships, and healthcare innovations.
              </Label>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox
                id="privacy"
                checked={formData.privacy}
                onCheckedChange={(checked) => handleInputChange("privacy", checked)}
                className="border-blue-500/30 data-[state=checked]:bg-blue-600"
                required
              />
              <Label htmlFor="privacy" className="text-sm text-gray-300 leading-relaxed">
                I agree to the privacy policy and consent to Zanantis contacting me regarding my inquiry. *
              </Label>
            </div>
          </div>

          {/* Priority Indicators */}
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
              Partnership Inquiries: 24hr response
            </Badge>
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">Healthcare Services: Same day</Badge>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>

        {/* Contact Information */}
        <div className="border-t border-blue-500/20 pt-6">
          <p className="text-center text-gray-300 text-sm mb-4">Prefer to reach out directly? Contact our team:</p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <p className="text-blue-300 font-semibold">Partnership Inquiries</p>
              <p className="text-gray-300">partnerships@zanantis.com</p>
            </div>
            <div className="text-center">
              <p className="text-blue-300 font-semibold">General Information</p>
              <p className="text-gray-300">info@zanantis.com</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
