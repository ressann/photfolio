import React from "react";
import { TabsContent } from "../ui/tabs";

function TabsContentNetworking() {
  return (
    <TabsContent value="networking">
      <div className="py-5 space-y-5">
        {/* Introduction */}
        <section className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-light text-foreground">
              Hello, I&apos;m LA RESSANN
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Results-driven IT Support and Network Engineer with strong
              hands-on experience in MikroTik RouterOS, Ruijie Access Points,
              and TP-Link network devices. Skilled in configuring, managing, and
              troubleshooting enterprise and SME network infrastructures, CCTV
              surveillance systems, Windows Server environments, and
              IPPBX/fingerprint attendance systems. Proven ability to lead
              technical teams, manage IT operations, and ensure stable network
              connectivity and system reliability. Fast learner with strong
              problem-solving and communication skills.
            </p>
          </div>
        </section>

        {/* Background */}
        <section className="space-y-6">
          <h3 className="text-xl font-light text-foreground">Background</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I have over 3 years of experience working with various network
              environments, including MikroTik routers, Ruijie access points,
              TP-Link routers, and Huawei switches. My current role as IT
              Supervisor involves managing and configuring complete network
              systems, CCTV, fingerprint, and IPPBX systems — ensuring high
              availability and security across all devices.
            </p>
            <p>
              My strongest areas are MikroTik RouterOS, Ruijie AP, and TP-Link
              networks, where I have implemented solutions that improved
              performance, reliability, and network efficiency. I take pride in
              being a fast learner, adaptable to new technologies, and dedicated
              to delivering quality results under pressure.
            </p>
          </div>
        </section>
        <section className="space-y-6">
          <h3 className="text-xl font-light text-foreground">My Philosophy</h3>
          <p className="border-l-2 border-primary pl-6 italic text-muted-foreground">
            &quot;Make it work, make it right, make it fast.&quot;
          </p>
        </section>
      </div>
    </TabsContent>
  );
}

export default TabsContentNetworking;
