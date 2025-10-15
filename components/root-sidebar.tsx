"use client";
import { usePathname } from "next/navigation";
import { sidebarData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function RootSidebar() {
  const pathname = usePathname();
  return (
    <div className="min-w-xs max-w-xs px-5 md:flex hidden ">
      <ul className="flex flex-col gap-2 transition-colors hover:text-primary">
        {sidebarData.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RootSidebar;
