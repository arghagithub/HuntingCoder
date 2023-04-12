import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
const slug = () => {
  //task 1: find the file corressponding to slug
  //task 2: populate them inside the page
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{slug}</h1>
        <hr />
        <hr />
        <div style={{padding:'1rem'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          dolor accusantium consectetur rem, dolores ad atque voluptatum rerum
          blanditiis reiciendis!
        </div>
      </main>
    </div>
  );
};

export default slug;
