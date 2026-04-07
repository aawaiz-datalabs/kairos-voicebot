import type { Metadata } from "next";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Insights — Kairos Growth Advisors",
  description:
    "Read our latest insights on AI, data strategy, and business transformation.",
};

const articles = [
  {
    title:
      'Why "Ensemble AI" is the Future — Part 2: Key Considerations for Ensemble AI',
    author: "Guest User",
    date: "10/29/24",
    href: "#",
  },
  {
    title: "Why Ensemble AI Is the Future — Part 1",
    author: "Miriam Kendall",
    date: "10/15/24",
    href: "#",
  },
  {
    title:
      "Cracking the Marketing Code: How to Use AI to Authentically Engage Gen Alpha",
    author: "Miriam Kendall",
    date: "9/26/24",
    href: "#",
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground text-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Insights
          </h1>
          <p className="mt-6 text-lg text-background/70 max-w-2xl leading-relaxed">
            Thought leadership on AI, data strategy, and business
            transformation from the Kairos team.
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="shadow-none transition-shadow duration-300 hover:shadow-md flex flex-col"
              >
                <CardHeader className="flex-1">
                  <CardDescription className="text-sm">
                    {article.author} &middot; {article.date}
                  </CardDescription>
                  <CardTitle className="text-xl leading-snug mt-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button
                    className="group rounded-lg text-base has-[>svg]:px-6"
                    size="lg"
                    asChild
                  >
                    <a href={article.href}>
                      Read More
                      <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
