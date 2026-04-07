import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Services — Kairos Growth Advisors",
  description:
    "Solving complex problems with precision. We specialize in turning AI and disruptive technology-driven complexities into opportunities.",
};

const strategyItems = [
  "AI & Data Readiness & Strategy",
  "Data Monetization Opportunity Assessment",
  "Consumer Analytics & Insights",
  "Consumer 360 & Personalization",
  "Journey Mapping & Engagement Strategies",
  "Business Case & KPIs",
  "Growth Roadmaps & Prioritized Initiatives",
  "Transformation Agenda & Change Management Plans",
];

const capabilitiesItems = [
  "Artificial Intelligence, Machine Learning, & Data Science",
  "Data Products, Platforms, Engineering, & Operations",
  "Data Visualization, Dashboards, & Business Insights",
  "Website & Mobile App Design & Development",
  "Workflow Re-engineering",
  "Organizational Redesign",
  "Talent Assessment & Talent Augmentation",
  "Partner Evaluation & Selection",
];

const deliveryItems = [
  "AI/ML Algorithm Development",
  "Personalization",
  "Consumer Acquisition, Engagement, & Retention",
  "Campaign & Journey Management",
  "Marketing Spend Optimization",
  "Test & Learn",
  "Digital Product Management & Development",
  "Pricing & Promotion Optimization",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground text-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl max-w-4xl">
            Solving complex problems with precision.
          </h1>
          <p className="mt-6 text-lg text-background/70 max-w-3xl leading-relaxed">
            Your challenges are unique, and so are our solutions. We specialize
            in turning AI and disruptive technology-driven complexities into
            opportunities that drive measurable value.
          </p>
          <p className="mt-4 text-lg text-background/70 max-w-3xl leading-relaxed">
            At Kairos Growth Advisors, we understand that constantly evolving
            technologies, especially AI, can be daunting. That&apos;s why we
            offer tailored solutions that not only meet your needs but exceed
            your expectations. Whether it&apos;s strategy, capabilities, or
            delivery, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-primary text-sm font-semibold uppercase tracking-wider">
                Strategy
              </h3>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Strategy that creates a true competitive edge
              </h2>
              <p className="mt-4 text-lg text-muted-foreground font-medium">
                Articulate your AI agenda and business case with clarity and
                confidence.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                A successful business transformation begins with the right
                strategy. We partner with our clients to chart a course for your
                organization&apos;s growth. Through a robust Opportunity
                Assessment, we help you develop Growth Maps that identify and
                prioritize how disruptive technologies like Artificial
                Intelligence can increase growth, improve profitability, create
                competitive advantage, and birth new businesses.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our experience with successful enterprise transformations
                informs how we work with you to build your capability roadmap,
                mitigate the common failure points, and ensure executive
                alignment, commitment and accountability.
              </p>
            </div>
            <div>
              <Card className="shadow-none">
                <CardContent className="space-y-3">
                  {strategyItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-primary text-sm font-semibold uppercase tracking-wider">
                Capabilities
              </h3>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Build the foundation for your future success.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground font-medium">
                New people, processes, and technologies — ready to scale.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Robust capabilities are the foundation to actualize your
                competitive strategy. We equip you with the tools and partners
                needed to succeed in a rapidly evolving market. We know firsthand
                what it is like working with constrained budgets and the need to
                prioritize investments, so we help you quickly align on the
                optimal capability roadmap that balances the need to build
                capabilities with the necessary financial returns.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We provide a comprehensive plan that encompasses the technology,
                process, talent, and culture components of a business
                transformation. We work with your organization to design, build,
                and deploy the capabilities needed to realize value from
                disruptive technologies.
              </p>
            </div>
            <div>
              <Card className="shadow-none">
                <CardContent className="space-y-3">
                  {capabilitiesItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-primary text-sm font-semibold uppercase tracking-wider">
                Delivery
              </h3>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Partners with you, every step of the way.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground font-medium">
                Ensuring value with ongoing support from optimization to
                operations.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our delivery services focus on translating strategy into
                actionable results that elevate your business performance. We
                work with our clients to operationalize AI use cases at scale
                through an iterative and agile development and delivery process.
                We know some clients prefer to start with a proof of concept
                while others are under pressure to more quickly deliver material
                bottom line results.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our collaborative approach allows us to support the priorities of
                each client. We also bring the expertise and a proven track
                record of knowing what it takes to be successful in a wide range
                of situations. We leverage that experience with industry specific
                use cases, along with our hybrid delivery model leveraging
                offshore resources, to maximize the business impact, speed to
                market, and overall return on investment.
              </p>
            </div>
            <div>
              <Card className="shadow-none">
                <CardContent className="space-y-3">
                  {deliveryItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to turn challenges into opportunities?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-background/70 leading-relaxed">
            Let&apos;s discuss how our services can drive measurable value for
            your business.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="group mt-8 rounded-lg text-base has-[>svg]:px-6"
            asChild
          >
            <Link href="/contact">
              GET IN TOUCH
              <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
