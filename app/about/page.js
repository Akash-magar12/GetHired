import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About JobMatch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re revolutionizing the way job seekers connect with their dream careers. Our AI-powered platform matches
            your skills and experience with the perfect opportunities.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-0 shadow-lg">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To bridge the gap between talented professionals and innovative companies. We believe everyone deserves
                to find work that&apos;s not just a job, but a calling.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AI-Powered Matching</Badge>
                <Badge variant="secondary">Career Growth</Badge>
                <Badge variant="secondary">Innovation</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <p className="text-gray-600">Upload your resume and create your profile</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <p className="text-gray-600">Our AI analyzes your skills and preferences</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <p className="text-gray-600">Get matched with relevant job opportunities</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">Trusted by Thousands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-black mb-2">50K+</div>
              <div className="text-gray-600">Job Seekers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">2K+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">15K+</div>
              <div className="text-gray-600">Successful Matches</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Constantly improving our technology to serve you better</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust</h3>
                <p className="text-gray-600">Building lasting relationships through transparency and reliability</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">Supporting career growth and professional development</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Job?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who have found their perfect career match
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100">
              Upload Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Browse Jobs
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
