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
              Hello, I'm LA RESSANN
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

        {/* Background
        <section className="space-y-6">
          <h3 className="text-xl font-light text-foreground">Background</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              With over [X] years of experience in web development, I've had the
              privilege of working on diverse projects ranging from small
              business websites to large-scale enterprise applications. My
              journey in tech began with a curiosity about how things work,
              which evolved into a deep passion for creating digital solutions.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating user
              experiences that are both intuitive and delightful. When I'm not
              coding, you can find me [your hobbies/interests].
            </p>
          </div>
        </section> */}

        {/* What I Do */}
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

        {/* Philosophy */}
        <section className="space-y-6">
          <h3 className="text-xl font-light text-foreground">My Philosophy</h3>
          <blockquote className="border-l-2 border-primary pl-6 italic text-muted-foreground">
            "Make it work, make it right, make it fast."
          </blockquote>
        </section>
      </div>
    </TabsContent>
  );
}

export default TabsContentPrograming;
