"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import TabsContentPrograming from "./tabs-content-programing";
import TabsContentNetworking from "./tabs-content-networking";

function AboutMe() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "programming";
  return (
    <div className="container mx-auto px-8 py-16 max-w-4xl">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-light tracking-tight text-primary">
            About Me
          </h1>
          <div className="h-px w-24 bg-border" />
        </div>

        <Tabs defaultValue={tab}>
          <TabsList>
            <TabsTrigger value="programming" asChild>
              <Link href={`/about-me?tab=programming`}>Programming</Link>
            </TabsTrigger>
            <TabsTrigger value="networking" asChild>
              <Link href={`/about-me?tab=networking`}>Networking</Link>
            </TabsTrigger>
          </TabsList>
          <TabsContentPrograming />
          <TabsContentNetworking />
        </Tabs>
      </div>
    </div>
  );
}

export default AboutMe;
