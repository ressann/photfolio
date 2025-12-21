import RootSidebar from "@/components/root-sidebar";
import SidebarSmallScreen from "@/components/sidebar-small-screen";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen max-h-screen justify-center relative">
      <div className="flex max-w-5xl md:w-5xl md:flex-row flex-col w-full h-screen py-5 bg-neutral-50 dark:bg-neutral-900">
        <SidebarSmallScreen />
        <ScrollArea className="w-full h-full">
          <div className="flex-1 md:px-5 w-full">{children}</div>
        </ScrollArea>
        <Separator orientation="vertical" className="md:inline-block hidden" />
        <RootSidebar />
      </div>
    </div>
  );
}
