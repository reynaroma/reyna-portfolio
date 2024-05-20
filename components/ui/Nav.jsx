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
  return (
    <nav>

    </nav>
  )
}

export default Nav
