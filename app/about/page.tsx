import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About — Kairos Growth Advisors",
  description:
    "Seasoned experts with a passion for results. We walk in your shoes and support you through your data and AI journey.",
};

const teamMembers = [
  {
    name: "Miriam Washington Kendall",
    role: "Co-Founder",
    description:
      "With over 20 years of experience crafting innovative growth strategies for competitive businesses and a proven track record as a three-time startup CMO, Miriam excels at turning challenges into opportunities. Before Kairos, Miriam was the CMO at Nanit, leading global marketing and e-commerce initiatives. She also drove rapid expansion at MakeSpace, growing the company from 4 to 31 markets in under two years. Her experience extends to luxury retail with M.Gemi and leading direct-to-consumer marketing at Under Armour. An industry thought leader, Miriam is a keynote speaker and co-author of the Amazon top 10 business book, Managing Customer Relationships: A Strategic Framework. Throughout her career, she's partnered with top consulting and marketing firms and led her own firm, Ratio Consulting, working with Fortune 500 clients like Microsoft and Nordstrom.",
  },
  {
    name: "Kurt Kendall, PhD",
    role: "Co-Founder",
    description:
      "Kurt is a co-founder of Kairos Growth Advisors and is passionate about the business opportunities that are created from data, analytics, and artificial intelligence. He has a Ph.D. from MIT and has held senior executive roles at GlaxoSmithKline, Under Armour, and Sears Holdings. He began his career as a management consultant where he led data and analytics transformations for clients while working at McKinsey & Company and Kurt Salmon (now part of Accenture). At Kairos Growth Advisors, Kurt is dedicated to driving business results for clients by bridging the gap between the theoretical potential of AI and the practical realities of delivering results. He has successfully led complex, high-impact transformations across multiple industries including retail, consumer products, media, financial services, and healthcare.",
  },
  {
    name: "John Howard, MBA",
    role: "Expert Advisor",
    description:
      "John brings over 20 years of expertise in data-driven strategies and innovative technologies to Kairos Growth Advisors. As a seasoned Senior Data & Analytics Executive, John specializes in transforming complex data into actionable insights, driving measurable business growth across diverse industries. John has held senior leadership roles at renowned companies including Signet Jewelers, Total Wine and More, Under Armour, and Lowe's Home Improvement. Most recently, as SVP of Enterprise Data and Analytics at Signet Jewelers, John spearheaded AI-powered initiatives that optimized customer insights, marketing strategies, store operations, merchandising, and demand forecasting.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground text-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl max-w-4xl">
            Seasoned experts with a passion for results.
          </h1>
          <p className="mt-6 text-lg text-background/70 max-w-2xl leading-relaxed">
            We&apos;ve walked in your shoes, and we&apos;re here to work with
            and support you through your data and AI journey.
          </p>
        </div>
      </section>

      {/* Kairos = opportune moments */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-primary text-sm font-semibold uppercase tracking-wider">
                Kairos = opportune moments
              </h3>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Founded by leaders who have faced the same challenges you&apos;re
                dealing with today.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                We know what it&apos;s like to be under pressure to deliver
                results, and we&apos;re here to help you succeed.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our business model is designed to create and manage opportune
                moments. Built for today&apos;s realities and offering hands-on,
                expert guidance tailored to your unique needs, we ensure you
                seize the moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Integrity. Innovation. Impact.
          </h2>
          <h3 className="mt-4 text-xl text-muted-foreground">
            These are the core values that drive everything we do.
          </h3>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            At Kairos Growth Advisors, we believe in acting with integrity,
            driving innovation, and making a tangible impact. Our approach is
            holistic and collaborative, ensuring that every solution we deliver
            is aligned with your business objectives and set up for long-term
            success.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Leadership that inspires.
            </h2>
            <h3 className="mt-4 text-xl text-muted-foreground">
              Get to know the Leaders of Kairos Growth Advisors.
            </h3>
          </div>

          <div className="space-y-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="shadow-none transition-shadow duration-300 hover:shadow-md"
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kairos */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Why Kairos?
            </h2>
            <h3 className="mt-4 text-xl text-muted-foreground">
              Proven expertise, a hybrid model, and a track record of delivering
              value.
            </h3>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Our seasoned team offers expert guidance across a wide range of
              technologies and industries. Our hybrid delivery model maximizes
              your ROI by combining top talent with cost-effective
              implementation. With a proven track record of realizing value,
              we&apos;re the partner you need to navigate the complexities of AI.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s Build the Future. Together.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-background/70 leading-relaxed">
            Learn more about how we can help you achieve your goals.
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
