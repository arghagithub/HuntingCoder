import React, { useEffect,useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
const slug = () => {
  //task 1: find the file corressponding to slug
  //task 2: populate them inside the page
  // http://localhost:3000/api/getblog?slug=how_to_learn_flask
  const [blog, setBlog] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if(!router.isReady){
      return;
    }
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((data) => {
        return data.json();
      })
      .then((parsedata) => {
        console.log(parsedata);
        setBlog(parsedata);
      });
  }, [router.isReady]);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <hr />
        <div style={{ padding: "1rem" }}>
          {blog && blog.content}
        </div>
      </main>
    </div>
  );
};

export default slug;
