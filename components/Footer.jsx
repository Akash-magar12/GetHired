import { Facebook, Github, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10">
          {/* Left Section */}
          <div className="flex-1 max-w-md">
            <h2 className="text-xl font-bold mb-4 sm:mb-6">GetHired.</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 leading-tight">
              Stay Connected <br /> With NextStep
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Follow us on social media to never miss a job opportunity, career
              insights, and expert hiring tips.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-black transition-colors" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-black transition-colors" />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-muted-foreground hover:text-black transition-colors" />
              </a>
              <a href="#" aria-label="GitHub">
                <Github className="w-5 h-5 text-muted-foreground hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation & Address */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-4">
            {/* Navigation */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">
                Navigation
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Career Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    For Employers
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">
                Our address
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+84 965 657 893</li>
                <li>contact@capiproduct.com</li>
                <li>35 To Vinh Dien str, Thanh Xuan, Hanoi, Vietnam</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 sm:py-6 text-center text-xs text-muted-foreground px-4">
        Copyrights 2025 JobNest. All rights reserved.
      </div>
    </footer>
  );
}
