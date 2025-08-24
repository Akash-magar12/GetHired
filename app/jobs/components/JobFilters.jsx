"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const JobFilters = () => {
  return (
    <Card className="sticky top-6">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          <Button variant="ghost" size="sm" className="text-xs">
            Clear All
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Job Type Filter */}
        <div>
          <h4 className="font-medium mb-3">Job Type</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="type-fulltime" />
              <label
                htmlFor="type-fulltime"
                className="text-sm font-medium leading-none"
              >
                Full-Time
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="type-parttime" />
              <label
                htmlFor="type-parttime"
                className="text-sm font-medium leading-none"
              >
                Part-Time
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="type-remote" />
              <label
                htmlFor="type-remote"
                className="text-sm font-medium leading-none"
              >
                Remote
              </label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Contract Type Filter */}
        <div>
          <h4 className="font-medium mb-3">Contract Type</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="contract-permanent" />
              <label
                htmlFor="contract-permanent"
                className="text-sm font-medium leading-none"
              >
                Permanent
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="contract-internship" />
              <label
                htmlFor="contract-internship"
                className="text-sm font-medium leading-none"
              >
                Internship
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="contract-freelance" />
              <label
                htmlFor="contract-freelance"
                className="text-sm font-medium leading-none"
              >
                Freelance
              </label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Location Filter */}
        <div>
          <h4 className="font-medium mb-3">Location</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            <div className="flex items-center space-x-2">
              <Checkbox id="location-delhi" />
              <label
                htmlFor="location-delhi"
                className="text-sm font-medium leading-none"
              >
                Delhi
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="location-mumbai" />
              <label
                htmlFor="location-mumbai"
                className="text-sm font-medium leading-none"
              >
                Mumbai
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="location-remote" />
              <label
                htmlFor="location-remote"
                className="text-sm font-medium leading-none"
              >
                Remote
              </label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobFilters;
