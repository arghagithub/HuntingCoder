import React from 'react'
import Head from "next/head";
import Script from "next/script";
const Alert = (props) => {
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
            </Head>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                crossOrigin="anonymous"
            ></Script>
            <div>
                props.alert && (
                <div className="container my-3">
                    <div
                        className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`}
                        role="alert"
                    >
                        {props.alert.message}
                    </div>
                </div>
                )
            </div>
        </>
    )
}

export default Alert
