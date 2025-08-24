import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen e">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our platform? Need help with your job search?
            We&apos;re here to help you succeed in your career journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-black">
                Send us a Message
              </CardTitle>
              <p className="text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Last Name
                  </label>
                  <Input
                    placeholder="Doe"
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="border-gray-300 focus:border-black focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Subject
                </label>
                <Input
                  placeholder="How can we help you?"
                  className="border-gray-300 focus:border-black focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  className="border-gray-300 focus:border-black focus:ring-black resize-none"
                />
              </div>

              <Button className="w-full bg-black hover:bg-gray-800 text-white py-3">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-black">
                  Contact Information
                </CardTitle>
                <p className="text-gray-600">
                  Reach out to us through any of these channels.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-black p-3 rounded-full">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Email</h3>
                    <p className="text-gray-600">support@jobmatch.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-black p-3 rounded-full">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-black p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Address</h3>
                    <p className="text-gray-600">
                      123 Business Ave
                      <br />
                      Suite 100
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-black p-3 rounded-full">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-black">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black mb-2">
                    How do I create an account?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Click the &quot;Sign Up&quot; button and follow the registration
                    process. You&apos;ll need to upload your resume to get started.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-black mb-2">
                    Is the platform free to use?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Yes! Creating an account and applying to jobs is completely
                    free for job seekers.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-black mb-2">
                    How does job matching work?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our AI analyzes your resume and matches you with relevant
                    job opportunities based on your skills and experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
