"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { sidebarData } from "@/lib/data";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function SidebarSmallScreen() {
  return (
    <nav className=" sticky top-5 md:hidden w-full flex items-center justify-center z-50">
      <div className=" backdrop-blur-md py-2 px-4 rounded-md bg-white/30 flex items-center gap-2">
        {sidebarData.map((item) => (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <Button className="" variant={"outline"} asChild>
                <Link href={item.href}>{item.icon}</Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </nav>
  );
}

export default SidebarSmallScreen;
