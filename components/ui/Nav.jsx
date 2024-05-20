"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // to get the current path

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

function Nav() {
  const pathName = usePathname(); // get the current path
  console.log(pathName);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link className={``}
          key={index}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
