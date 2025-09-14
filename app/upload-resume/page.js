"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, CheckCircle, UploadCloud, Trash2 } from "lucide-react";
import { useState } from "react";

const UploadResume = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile.size > 5 * 1024 * 1024) {
      alert("File size should be less than 5MB");
      return;
    }
    setFile(uploadedFile);
  };

  const handleFileRemove = () => {
    setFile(null);
  };
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Upload Your Resume
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized job recommendations based on your skills and
            experience. Upload your resume and let us match you with the perfect
            opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="h-fit shadow-lg border-0 rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold">
                Upload Your Resume
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Stand out by uploading your updated resume. Recruiters will
                notice you faster.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div
                onClick={() => document.getElementById("resumeUpload").click()}
                className="flex flex-col items-center justify-center border-2 border-dashed border-muted rounded-2xl p-10 text-center hover:border-primary transition cursor-pointer bg-muted/20"
              >
                <UploadCloud className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">
                  Drag & drop your resume here
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  or{" "}
                  <span className="text-primary font-semibold cursor-pointer">
                    browse files
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Supports PDF, DOC, DOCX (max 5MB)
                </p>
                <input
                  id="resumeUpload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              {file && (
                <div className="flex items-center justify-between p-4 border rounded-xl bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {file.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={handleFileRemove}
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              )}

              <Button
                disabled={!file}
                className="w-full py-3 cursor-pointer text-base font-semibold rounded-lg"
              >
                Get Job Recommendations
              </Button>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Why Upload Your Resume?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Personalized Matches
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Get job recommendations tailored to your skills and
                      experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Faster Applications
                    </h4>
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
                    <h4 className="font-semibold text-foreground mb-1">
                      Skill Analysis
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Get insights on your skills and suggestions for
                      improvement
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;
