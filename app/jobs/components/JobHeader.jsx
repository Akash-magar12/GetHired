"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const JobHeader = () => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4">Find Your Dream Job</h1>
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search jobs, companies, or locations..."
          className="pl-10"
        />
      </div>
    </div>
  );
};

export default JobHeader;
