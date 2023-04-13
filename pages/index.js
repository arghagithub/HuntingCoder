import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/coding.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <h2>&lt;Hunting coder/&gt;</h2>
        </div>

        <img
          src="/coder.avif"
          className={styles.myimg}
          alt=""
          height={200}
          width={300}
        />

        <div className={styles.description}>
          <p>
            A blog for a hunting coder for a hunting coder&nbsp;
          </p>
        </div>

        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
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
          <div className={styles.blogitem}>
            <h3>How to learn JavaScript in 2023</h3>
            <p>
              JavaScript is the language used to design the logic for the web
            </p>
          </div>
        </div>

      </main>
    </>
  );
}
