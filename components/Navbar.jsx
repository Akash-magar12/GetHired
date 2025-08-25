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
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          className="font-black text-xl sm:text-2xl hover:opacity-80 transition-opacity"
          href="/"
        >
          GetHired.
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                size="sm"
                className="font-medium cursor-pointer"
              >
                Login
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm" className="font-medium cursor-pointer">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Tablet Buttons (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center space-x-2">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle className="font-black text-lg">
                  GetHired.
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col p-4 gap-4">
                {navLinks.map((link, i) => (
                  <SheetClose asChild key={i}>
                    <Link
                      href={link.href}
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="mt-8 flex flex-col p-4 gap-3">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="ghost" className="w-full">
                      Login
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button className="w-full">Sign Up</Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
