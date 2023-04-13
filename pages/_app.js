import { useState } from 'react'
import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Alert from '@/components/Alert'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  // const [alert, setAlert] = useState(null);
  // const showalert = ((message, type) => {
  //   setAlert({
  //     message: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 2000);
  // })
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Navbar />
    {/* <Alert alert={alert} /> */}
    <Component {...pageProps} />
  </>
}
