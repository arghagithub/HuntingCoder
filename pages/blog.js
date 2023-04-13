import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const fs = require("fs");
const directoryPath = "blogdata";
// task 1: collect all files from blogdata directory
// task 2: ierate throgh them and display them
const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allblogs);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          {blogs.map((blogitem, index) => {
            return (
              <div className={styles.blogitem} key={index}>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3>{blogitem.title}</h3>
                </Link>
                <p>{blogitem.content.substr(0, 250) + "   ..."}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  // let data = await fetch("http://localhost:3000/api/getfiles");
  // let allblogs = await data.json();
  let data = await fs.promises.readdir(directoryPath);
  let myfile,
    allblogs = [];
  for (let index = 0; index < data.length; index++) {
    const file = data[index];
    console.log(file);
    myfile = await fs.promises.readFile(`blogdata/${file}`, "utf-8");
    allblogs.push(JSON.parse(myfile));
  }
  return {
    props: { allblogs }, // will be passed to the page component as props
  };
}

export default Blog;
