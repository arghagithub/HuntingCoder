import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <Link className={styles.link} href="/">
          {" "}<li>Home</li>
        </Link>
        <Link className={styles.link} href="/about">
          {" "}<li>About</li>
        </Link>
        <Link className={styles.link} href="/blog">
          {" "}<li>Blogs</li>
        </Link>
        <Link className={styles.link} href="/contact">
          {" "}<li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
