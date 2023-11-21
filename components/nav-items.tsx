import Link from "next/link";
import React from "react";

const NavItems = () => {
  const routes = [
    {
      id: 1,
      label: "Find a Job",
      href: "/",
    },
    {
      id: 2,
      label: "Talents",
      href: "/",
    },
    {
      id: 3,
      label: "Features",
      href: "/",
    },
    {
      id: 4,
      label: "About",
      href: "/",
    },
    {
      id: 5,
      label: "Login",
      href: "/",
    },
  ];
  return (
    <div className="hidden md:flex items-center gap-x-4 lg:gap-x-8">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.id}
          className="font-semibold text-black text-[18px] leading-[24px] "
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
