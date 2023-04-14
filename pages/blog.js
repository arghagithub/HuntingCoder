import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Loading from './Loading_icon.gif';
import Link from "next/link";
const fs = require("fs");
import InfiniteScroll from 'react-infinite-scroll-component'
const directoryPath = "blogdata";
// task 1: collect all files from blogdata directory
// task 2: ierate throgh them and display them
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allblogs);
  const [count,setCount]=useState(2);
  const fetchMoreData = async () => {
    let d= await fetch(`http://localhost:3000/api/getfiles/?count=${count+2}`);
    setCount(count+2);
    let data=await d.json();
    setBlogs(data);
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogs}>
          <InfiniteScroll
            dataLength={blogs.length}
            next={fetchMoreData}
            hasMore={props.allcount !== blogs.length}
            loader={<h6 className="text-center">Loading ...</h6>}
            endMessage={
              <p style={{textAlign:'center'}} >
                <b>Yahhh! You have seen it all</b>
              </p>
            }
          >
            {blogs.map((blogitem, index) => {
              return (
                <div className={styles.blogitem} key={index}>
                  <Link className={styles.link} href={`/blogpost/${blogitem.slug}`}>
                    <h3>{blogitem.title}</h3>
                  </Link>
                  <p>{(blogitem.metadesc) ? (blogitem.metadesc) : (blogitem.content.substr(0, 140)) + "   ..."}</p>
                  <Link className={styles.link} href={`/blogpost/${blogitem.slug}`}>
                    <div className="d-flex justify-content-center my-2">
                      <button type="button" className="btn btn-dark">Read more</button>
                    </div>
                  </Link>
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  // let data = await fetch("http://localhost:3000/api/getfiles");
  // let allblogs = await data.json();
  let data = await fs.promises.readdir(directoryPath);
  let allcount=data.length;
  let myfile,
    allblogs = [];
  for (let index = 0; index < 2; index++) {
    const file = data[index];
    myfile = await fs.promises.readFile(`blogdata/${file}`, "utf-8");
    allblogs.push(JSON.parse(myfile));
  }
  return {
    props: { allblogs,allcount }, // will be passed to the page component as props
  };
}

export default Blog;
