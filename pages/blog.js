import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

// task 1: collect all files from blogdata directory
// task 2: ierate throgh them and display them
const blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/getfiles")
      .then((data) => {
        return data.json();
      })
      .then((parsedata) => {
        console.log(parsedata);
        setBlogs(parsedata);
      });
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          {blogs.map((blogitem,index) => {
            return (
              <div className={styles.blogitem} key={index}>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3>{blogitem.title}</h3>
                </Link>
                <p>
                  {blogitem.content}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default blog;
