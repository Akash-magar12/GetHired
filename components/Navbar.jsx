import { Button } from "@/components/ui/button";
import { navLinks } from "@/utils/const";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-3 items-center">
      <Link className="font-black" href="/">
        NextStep..
      </Link>
      <div className="flex gap-6">
        {navLinks.map((link, i) => (
          <Link key={i} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="space-x-3">
        <Button variant="outline" className="cursor-pointer">
          Login
        </Button>
        <Button className="cursor-pointer">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
