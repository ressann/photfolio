"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

function PageContainer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "programming";
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-8 py-16 max-w-4xl">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-light tracking-tight text-primary">
            {title}
          </h1>
          <div className="h-px w-24 bg-border" />
        </div>

        <Tabs defaultValue={tab}>
          <TabsList>
            <TabsTrigger value="programming" asChild>
              <Link href={`${pathname}?tab=programming`}>Programming</Link>
            </TabsTrigger>
            <TabsTrigger value="networking" asChild>
              <Link href={`${pathname}?tab=networking`}>Networking</Link>
            </TabsTrigger>
          </TabsList>
          {children}
        </Tabs>
      </div>
    </div>
  );
}

export default PageContainer;
