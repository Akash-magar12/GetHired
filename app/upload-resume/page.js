"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { FileText, CheckCircle, UploadCloud, Trash2 } from "lucide-react"

const UploadResume = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Upload Your Resume</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized job recommendations based on your skills and experience. Upload your resume and let us
            match you with the perfect opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="h-fit shadow-lg border-0 rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold">Upload Your Resume</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Stand out by uploading your updated resume. Recruiters will notice you faster.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted rounded-2xl p-10 text-center hover:border-primary transition cursor-pointer bg-muted/20">
                <UploadCloud className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">Drag & drop your resume here</p>
                <p className="text-sm text-muted-foreground mb-4">
                  or <span className="text-primary font-semibold cursor-pointer">browse files</span>
                </p>
                <p className="text-xs text-muted-foreground">Supports PDF, DOC, DOCX (max 5MB)</p>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-xl bg-primary/5 border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">resume.pdf</p>
                    <p className="text-xs text-muted-foreground">2.4 MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="jobTitle" className="text-sm font-medium">
                    Desired Job Title
                  </Label>
                  <Input
                    id="jobTitle"
                    placeholder="e.g., Software Engineer, Marketing Manager"
                    className="mt-1 rounded-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="experience" className="text-sm font-medium">
                    Years of Experience
                  </Label>
                  <select
                    id="experience"
                    className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-6">4-6 years</option>
                    <option value="7-10">7-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="skills" className="text-sm font-medium">
                    Key Skills (comma separated)
                  </Label>
                  <Input
                    id="skills"
                    placeholder="e.g., JavaScript, React, Node.js, Python"
                    className="mt-1 rounded-lg"
                  />
                </div>
              </div>

              <Button className="w-full py-3 text-base font-semibold rounded-lg">Get Job Recommendations</Button>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Why Upload Your Resume?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Personalized Matches</h4>
                    <p className="text-sm text-muted-foreground">
                      Get job recommendations tailored to your skills and experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Faster Applications</h4>
                    <p className="text-sm text-muted-foreground">
                      Apply to jobs with one click using your uploaded resume
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Skill Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Get insights on your skills and suggestions for improvement
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 shadow-lg rounded-2xl">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Resume Processed Successfully!</h3>
                    <p className="text-muted-foreground mb-4">
                      We're analyzing your resume and finding the best job matches for you.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary" className="rounded-full">
                        JavaScript
                      </Badge>
                      <Badge variant="secondary" className="rounded-full">
                        React
                      </Badge>
                      <Badge variant="secondary" className="rounded-full">
                        Node.js
                      </Badge>
                      <Badge variant="secondary" className="rounded-full">
                        Python
                      </Badge>
                      <Badge variant="secondary" className="rounded-full">
                        AWS
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full py-3 text-base font-semibold rounded-lg">View Job Recommendations</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadResume
