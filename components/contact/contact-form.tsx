import React from "react";
import SendMessageForm from "./send-message-form";

function ContactForm() {
  return (
    <div className="container mx-auto px-8 py-16 max-w-4xl">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-light tracking-tight text-primary">
            Contact
          </h1>
          <div className="h-px w-24 bg-border" />
        </div>

        {/* Introduction */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say
            hello, feel free to reach out.
          </p>
        </section>

        {/* Contact Information */}
        <section className="space-y-8">
          <h2 className="text-2xl font-light text-foreground">Get In Touch</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Email
              </h3>
              <a
                href="mailto:laressann2001@gmail.com"
                className="text-lg text-primary hover:underline transition-all"
              >
                laressann2001@gmail.com
              </a>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Phone
              </h3>
              <a
                href="tel:+1234567890"
                className="text-lg text-primary hover:underline transition-all"
              >
                087 910 360
              </a>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Location
              </h3>
              <p className="text-lg text-foreground">
                Banteay Meanchey, Cambodia
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Social
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ressann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-primary hover:underline transition-all"
                >
                  GitHub
                </a>
                <a
                  href="https://t.me/ressann_la"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-primary hover:underline transition-all"
                >
                  Telegram
                </a>
                <a
                  href="https://x.com/la_ressann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-primary hover:underline transition-all"
                >
                  X
                </a>
              </div>
            </div>
          </div>
        </section>

        <SendMessageForm />

        {/* Availability */}
        <section className="space-y-4 pt-8 border-t border-border">
          <h3 className="text-xl font-light text-foreground">Availability</h3>
          <p className="text-muted-foreground leading-relaxed">
            I'm currently available for freelance projects and full-time
            opportunities. Response time is typically within 24-48 hours.
          </p>
        </section>
      </div>
    </div>
  );
}

export default ContactForm;
