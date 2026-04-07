import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { MailIcon } from "lucide-react";
import ContactForm from "@/components/shadcn-studio/blocks/contact-us-page-02/contact-form";
import RetellChatEmbed from "@/components/retell/RetellChatEmbed";

export const metadata: Metadata = {
  title: "Contact — Kairos Growth Advisors",
  description:
    "To learn more about how we can help you drive profitable growth through disruptive technologies, please reach out here.",
};

export default function ContactPage() {
  return (
    <>
      <RetellChatEmbed />
      {/* Hero */}
      <section className="bg-foreground text-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-background/70 max-w-2xl leading-relaxed">
            To learn more about how we can help you drive profitable growth
            through disruptive technologies, please reach out here.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border shadow-none">
            <CardContent className="grid gap-6 md:grid-cols-6">
              <Card className="bg-primary py-8 shadow-none md:col-span-3 xl:col-span-2">
                <CardContent className="text-primary-foreground space-y-7">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Get In Touch</h2>
                    <p>
                      We&apos;re here to help you navigate the complexities of
                      AI and drive measurable business value.
                    </p>
                  </div>

                  <div className="space-y-7">
                    <div className="flex items-start gap-4">
                      <MailIcon className="size-7 shrink-0" />
                      <a
                        className="text-lg font-semibold"
                        href="mailto:info@kairosgrowthadvisors.com"
                      >
                        info@kairosgrowthadvisors.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="md:col-span-3 xl:col-span-4">
                <ContactForm />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
