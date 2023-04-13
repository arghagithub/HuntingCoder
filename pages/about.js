import React from 'react'
import styles from "@/styles/About.module.css";
const about = () => {
  return (
    <div>
      <h2 className={styles.head}>About Hunting Coder</h2>
      <div className={styles.container}>
        <h4>Introduction</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente sunt adipisci cumque nobis eligendi vitae delectus nesciunt nulla repellat reprehenderit molestiae veniam quod aut tempore laboriosam pariatur nisi fugiat, recusandae nam! Ut eius, quam ad nisi tempora amet adipisci dicta porro excepturi earum voluptate est distinctio possimus delectus laudantium consequuntur?</p>
        <h4>Service Offered</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, error ea eligendi aliquam eius quis possimus deleniti temporibus debitis delectus.</p>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
          <li>Service 5</li>
          <li>Service 6</li>
          <li>Service 7</li>
          <li>Service 8</li>
          <li>Service 9</li>
          <li>Service 10</li>
        </ul>
        <h4>Contact Us</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id tenetur tempora qui facere veniam fugiat commodi laudantium possimus ducimus illum?</p>
      </div>
    </div>
  )
}

export default about
