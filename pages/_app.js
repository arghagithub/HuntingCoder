import Alert from '@/components/Alert'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useState } from 'react'

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
    <Navbar />
    {/* <Alert alert={alert} /> */}
    <Component {...pageProps} />
  </>
}
