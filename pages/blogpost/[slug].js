import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
const fs = require("fs");
const Slug = (props) => {
  function createMarkup(content) {
    return { __html: content };
  }
  //task 1: find the file corressponding to slug
  //task 2: populate them inside the page
  // http://localhost:3000/api/getblog?slug=how_to_learn_flask
  const [blog, setBlog] = useState(props.myblog);
  // const router = useRouter();
  // const { slug } = router.query;
  // useEffect(() => {
  //   if (!router.isReady) {
  //     return;
  //   }
  // }, [router.isReady]);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="text-center" >{blog && blog.title}</h1>
        <hr />
        <hr />
        <div className={styles.content}>

          {
            blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} />
          }
        </div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how_to_learn_flask" } },
      { params: { slug: "how_to_learn_javascript" } },
      { params: { slug: "how_to_learn_nextjs" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  // let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  // let myblog = await data.json();

  let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myblog: JSON.parse(myblog) }, // will be passed to the page component as props
  };
}

export default Slug;
