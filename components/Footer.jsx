import { Facebook, Github, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto  py-12 flex justify-between gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold mb-6">NextStep.</h2>
          <h3 className="text-2xl font-semibold mb-3">
            Stay Connected <br /> With NextStep
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm mb-6">
            Follow us on social media to never miss a job opportunity, career
            insights, and expert hiring tips.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-black" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-black" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-black" />
            </a>
            <a href="#" aria-label="TikTok">
              <Github className="w-5 h-5 text-muted-foreground
              hover:text-black" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Career Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  For Employers
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">
              Our address
            </h3>
            <ul className="space-y-2 text-sm">
              <li>+84 965 657 893</li>
              <li>contact@capiproduct.com</li>
              <li>35 To Vinh Dien str, Thanh Xuan, Hanoi, Vietnam</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        Copyrights 2025 JobNest. All rights reserved.
      </div>
    </footer>
  );
}
