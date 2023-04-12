import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const blog = () => {
  return (
      <main className={styles.main}>
        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogitem}>
            <Link href='/blogpost/letslearnjavascript' ><h3>How to learn JavaScript in 2023</h3></Link>
            <p>
              JavaScript is the language used to design the logic for the web
            </p>
          </div>
          <div className={styles.blogitem}>
            <h3>How to learn JavaScript in 2023</h3>
            <p>
              JavaScript is the language used to design the logic for the web
            </p>
          </div>
          <div className={styles.blogitem}>
            <h3>How to learn JavaScript in 2023</h3>
            <p>
              JavaScript is the language used to design the logic for the web
            </p>
          </div>
        </div>
      </main>
  );
};

export default blog;
