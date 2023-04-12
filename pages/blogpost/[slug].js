import React from 'react'
import { useRouter } from 'next/router'
import styles from "@/styles/Home.module.css";
const slug = () => {
    const router=useRouter();
    const {slug}= router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>{slug}</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor accusantium consectetur rem, dolores ad atque voluptatum rerum blanditiis reiciendis!</p>
      </main>
    </div>
  )
}

export default slug
