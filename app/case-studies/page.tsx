import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Case Studies — Kairos Growth Advisors",
  description:
    "Discover how we helped companies seize the moment, delivering solutions to complex problems and driving ROI.",
};

const caseStudies = [
  {
    title: "Modernizing AI Tech Stack and Algorithms",
    challenge:
      "The company was an active user of data science to improve marketing performance and consumer experience on their websites, mobile apps, and digital marketing channels (e.g., email, social media). However, over time the company's capabilities had not kept up with the advancements in technology and analytics methods and were underperforming relative to expectations.",
    solution:
      "After assessing the maturity level of both the analytics group and the functions they supported (e.g., marketing, pricing, inventory planning), a prioritized set of initiatives were recommended and agreed upon by the senior executive team. The first phase involved migrating their data platform to one of the leading cloud providers and deploying a portfolio of open-source analytic tools. Once in place, a wholesale rebuild of all existing algorithms was undertaken leveraging the newly available machine learning solutions. The initial set of new models were quickly evaluated and proved to both reduce costs while materially improving model performance. Eventually, all existing models were upgraded and an ongoing, self-funded, model refresh cycle was put in place.",
    impact:
      "We were able to reduce compute, data storage, and software licensing costs, producing over $0.5M in annual savings net of the new cloud infrastructure costs. The new machine learning based models increased profitability by 5% through higher response rates and cross-sell.",
  },
  {
    title: "Building the Next Generation Data Platform for AI",
    challenge:
      "A Fortune 1000 global brand was in the early stages of a multi-year technology transformation to build the data foundation for analytics and AI. They had made the decision to upgrade many of their core enterprise applications, including consolidating their ERP systems to SAP's S4 Hana Fashion & Vertical Brands. However, they realized that their existing data platform would neither support these upgraded applications nor support their AI agenda.",
    solution:
      "Partnering with their technology and business leadership, Kairos led the development of a new enterprise data, analytics, and AI strategy that defined the next generation target state architecture, enterprise data governance model, data products, and the selection of the best-of-breed technology partners for key capabilities (e.g., cloud computing, machine learning, generative AI). Concurrently, Kairos worked with the global data engineering team to overhaul dev/ops to dramatically reduce service incidences. This freed up critical data engineering resources that were then redeployed to work on implementation of the new data strategy.",
    impact:
      "Over the course of 6 months, we developed the data strategy that was reviewed and signed off by the CEO, CFO, and other key leaders (e.g., CMO). We reduced overall service tickets by more than 50%, allowing for a commensurate number of resources to be available to work on net-new capabilities.",
  },
  {
    title: "Unlocking Growth for a Health-Tech Startup",
    challenge:
      "A healthcare startup developing new digital therapeutics to improve patient outcomes was experiencing significant business demand that was exceeding the scalability of their technology platform. They needed a roadmap for where to strategically invest to enable the business to grow while judiciously using available capital.",
    solution:
      "Kairos partnered with their business and technology leadership to identify the technical root causes that were posing challenges to their growth. We developed a new Azure-based data and application foundation that leveraged the latest technology to dramatically reduce expected development costs, speed time to deployment, and reduce technical debt. We led the selection, development, and deployment of these new capabilities, ensuring they met the highest standards for data security, data privacy, and regulatory compliance.",
    impact:
      "In less than 60 days we designed and deployed a new secure clinical data environment within Azure Health Data Services and a parallel analytic environment in Azure Data Lake. We also developed new data pipelines to 3rd party solutions to allow for interoperability of healthcare data and streamline internal consumption and publication of data.",
  },
  {
    title: "Personalizing User Experiences with First Party Data",
    challenge:
      "A global consumer brand had access to over 100 terabytes of first party data from its consumers but wasn't leveraging it to personalize their experience. The lack of personalization drove measurably higher acquisition costs, lower retention, and reduced lifetime value.",
    solution:
      "We worked with the ecommerce, marketing, and technology teams to assess their current capabilities, define a personalization roadmap, determine the appropriate build vs. buy tradeoffs, and created a business case to advance their personalization agenda. In addition to building a new cloud-based data platform to host a consumer 360, we helped lead the implementation of a new marketing cloud, A/B testing and personalization solution, and developed new marketing workflows to support the content needs for a highly personalized digital experience across website, mobile app, and email.",
    impact:
      "We generated $5M in cost savings through improved operational efficiencies, contract terms, and reduced resource costs for personalizing communications at scale.",
  },
  {
    title: "Optimizing Digital Marketing Spend",
    challenge:
      "A leading digital media company was investing tens of millions of dollars into acquiring users for its website and apps but was struggling to generate a positive ROI. They were using many of the standard digital analytics tools (e.g., Google Analytics, modeling lifetime value) to help make decisions on how to allocate marketing dollars but were challenged with both the accuracy of the data and timeliness of decision making.",
    solution:
      "We conducted an audit of the digital marketing processes, the analytic and data science methods, and the technologies being utilized to measure performance to determine where and how to improve marketing ROI. We developed and implemented a new process to determine the lifetime value of a newly acquired user based on a combination of predictive and heuristic factors. We created monthly playbooks that the digital marketing team used to inform decisions about the channel (e.g., Facebook, YouTube, Google Search) and CPM/CPC allowables.",
    impact:
      "We reduced overall spend by eliminating unprofitable digital marketing while increasing ROI by 20-40% with remaining marketing tactics.",
  },
  {
    title: "Monetizing Digital Assets with Blockchain",
    challenge:
      "The CEO of a $6 billion company recognized that its legacy business was at risk of becoming obsolete and was determined to leapfrog the competition by embracing emerging technologies. The challenge was transforming that ambition into a tangible, market-ready product that would launch in less than 12 months.",
    solution:
      "We co-led the development of a monetization strategy for their digital assets, unlocking the value in digital media and IP through tokenization and the use of a blockchain ledger to guard against losing control of the assets. The team designed a sophisticated technology platform, a go-to-market plan, and a network of strategic partnerships to support the launch. The result is an AI-enabled digital platform that monetizes digital assets and documents provenance as ownership changes hands.",
    impact:
      "We generated $5M in cost savings through improved operational efficiencies, contract terms, and reduced resource costs for personalizing communications at scale.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground text-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Case Studies
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            {caseStudies.map((cs, index) => (
              <a
                key={index}
                href={`#case-study-${index}`}
                className="text-sm text-background/70 hover:text-background transition-colors border border-background/20 rounded-lg px-4 py-2 hover:border-background/40"
              >
                {cs.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((cs, index) => (
        <section
          key={index}
          id={`case-study-${index}`}
          className={`py-20 sm:py-28 ${index % 2 === 1 ? "bg-muted" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {cs.title}
            </h2>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="text-primary text-lg">
                    Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {cs.challenge}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="text-primary text-lg">
                    Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {cs.solution}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="text-primary text-lg">
                    Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {cs.impact}
                  </p>
                </CardContent>
              </Card>
            </div>

            {index < caseStudies.length - 1 && (
              <Separator className="mt-20 sm:mt-28" />
            )}
          </div>
        </section>
      ))}
    </>
  );
}
