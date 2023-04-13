import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
const slug = (props) => {
  //task 1: find the file corressponding to slug
  //task 2: populate them inside the page
  // http://localhost:3000/api/getblog?slug=how_to_learn_flask
  const [blog, setBlog] = useState(props.partblog);
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
        <h1>{blog && blog.title}</h1>
        <hr />
        <hr />
        <div style={{ padding: "1rem" }}>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const {slug}=context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let partblog = await data.json();

  return {
    props: { partblog }, // will be passed to the page component as props
  };
}

export default slug;
