"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/utils/const";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-3 px-4 md:px-8 border-b">
      {/* Logo */}
      <Link className="font-black text-xl" href="/">
        NextStep..
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-6">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-3">
        <Button variant="outline">Login</Button>
        <Button>Sign Up</Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-6 p-6">
            {/* Mobile Links */}
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-lg hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <Button variant="outline" className="w-full">Login</Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
