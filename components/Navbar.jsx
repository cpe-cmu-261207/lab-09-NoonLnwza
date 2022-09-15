import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div class="hstack gap-5 mx-auto fs-6" style={{ maxWidth: "400px" }}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/experience">
        <a>Experience</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/lab-07">
        <a>Lab-07</a>
      </Link>
    </div>
  );
}
