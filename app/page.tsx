import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-foreground text-background py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              DRIVE GROWTH? <span className="text-muted-foreground">Check.</span>
            </h1>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Leverage AI & new tech? <span className="text-muted-foreground">Check.</span>
            </h1>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              DELIVER RESULTS? <span className="text-muted-foreground">Check.</span>
            </h1>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Need help? <span className="text-primary-foreground">We&apos;ve got you.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1: Delivering Solutions */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Delivering solutions to complex problems is no easy feat.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You&apos;re under pressure to quickly turn AI-driven complexities
              into measurable business value. We get it. And we can help.
            </p>
            <Button
              size="lg"
              className="group rounded-lg text-base has-[>svg]:px-6"
              asChild
            >
              <Link href="/services">
                OUR SERVICES
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: We've been in your shoes */}
      <section className="bg-muted py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              We&apos;ve been in your shoes, and we can ease your pain.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We&apos;re seasoned experts with a business model that is built
              for today&apos;s realities.
            </p>
            <Button
              size="lg"
              className="group rounded-lg text-base has-[>svg]:px-6"
              asChild
            >
              <Link href="/about">
                ABOUT US
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: Tangible business value */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Tangible business value delivered. Always.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover how we helped these companies seize the moment,
              delivering solutions to complex problems and driving ROI for their
              business.
            </p>
            <Button
              size="lg"
              className="group rounded-lg text-base has-[>svg]:px-6"
              asChild
            >
              <Link href="/case-studies">
                CASE STUDIES
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
