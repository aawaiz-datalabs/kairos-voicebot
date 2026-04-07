import { Separator } from "@/components/ui/separator";
import Logo from "@/components/shadcn-studio/logo";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8">
        <a href="/">
          <Logo className="gap-3" />
        </a>

        <div className="flex items-center gap-5 whitespace-nowrap text-sm">
          <a
            href="/about"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            About
          </a>
          <a
            href="/services"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            Services
          </a>
          <a
            href="/case-studies"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            Case Studies
          </a>
          <a
            href="/insights"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            Insights
          </a>
          <a
            href="/contact"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            Contact
          </a>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 max-md:flex-col max-md:gap-2">
        <p className="text-sm text-muted-foreground">
          PRIVACY POLICY
        </p>
        <p className="text-sm text-muted-foreground">
          &copy;{new Date().getFullYear()} Kairos Growth Advisors LLC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
