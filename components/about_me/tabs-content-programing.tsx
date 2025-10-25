"use client";

import { TabsContent } from "../ui/tabs";

function TabsContentPrograming() {
  return (
    <TabsContent value="programming">
      <div className="py-5 space-y-5">
        {/* Introduction */}
        <section className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-light text-foreground">
              Hello, I&apos;m LA RESSANN
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a Full-Stack Developer who loves to build things from the
              ground up. I taught myself everything I know, from JavaScript and
              TypeScript to creating full applications with React/Next.js on the
              front-end and Node.js on the back-end. My portfolio is packed with
              practical projects like e-commerce clones and dashboards, proving
              my ability to deliver results. I&apos;m comfortable with SQL/NoSQL
              databases, a big fan of Tailwind CSS, and ready to contribute my
              skills and endless curiosity to a forward-thinking team.
              Let&apos;s build something great together.
            </p>
          </div>
        </section>
        <section className="space-y-6">
          <h3 className="text-xl font-light text-foreground">What I Do</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">
                Frontend Development
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Creating responsive, accessible interfaces with modern
                frameworks and best practices.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">
                Backend Development
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building robust APIs and server-side applications with
                scalability in mind.
              </p>
            </div>
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

export default TabsContentPrograming;
