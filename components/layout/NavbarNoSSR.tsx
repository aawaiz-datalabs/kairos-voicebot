"use client";

import dynamic from "next/dynamic";

type NavigationItem = {
  title: string;
  href: string;
}[];

const Navbar = dynamic(
  () =>
    import(
      "@/components/shadcn-studio/blocks/navbar-component-05/navbar-component-05"
    ),
  { ssr: false },
);

export default function NavbarNoSSR({
  navigationData,
}: {
  navigationData: NavigationItem;
}) {
  return <Navbar navigationData={navigationData} />;
}

