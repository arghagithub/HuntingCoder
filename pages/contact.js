import React, { useState } from 'react'
import styles from "@/styles/Contact.module.css";
import Head from "next/head";
import Script from "next/script";
const contact = () => {
  // const {showalert}=props;
  const [credentials, setCredentials] = useState({
    name: "", email: "", phone: "", desc: ""
  })
  const handlesubmit = (e) => {
    e.preventDefault();
    async function postJSON(data) {
      try {
        const response = await fetch("http://localhost:3000/api/postcontact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Success:", result);
        // showalert("Thanks for submitting the form","success");
      } catch (error) {
        console.error("Error:", error);
        // showalert("Sorry, internal server error","danger");
      }
    }

    const data = { name: credentials.name, email: credentials.email, phone: credentials.phone, desc: credentials.desc };
    postJSON(data);
    setTimeout(() => {
      setCredentials({name: "", email: "", phone: "", desc: ""});
    }, 1000);
  }

  const handlechange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossOrigin="anonymous" strategy="afterInteractive"
      ></Script>
      <div className='container my-3'>
        <h1 className='text-center my-3'>Contact Us</h1>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name :</label>
            <input type="text" className="form-control" id="name" name='name' onChange={handlechange} value={credentials.name} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address :</label>
            <input type="email" className="form-control" id="email" name='email' onChange={handlechange} value={credentials.email} />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone :</label>
            <input type="text" className="form-control" id="phone" name='phone' onChange={handlechange} value={credentials.phone} />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description :</label>
            <div className="form-floating">
              <textarea className="form-control" placeholder="Leave a comment here" id="desc" name='desc' onChange={handlechange} value={credentials.desc} />
              <label htmlFor="floatingTextarea">Description</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default contact
