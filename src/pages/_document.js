import { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/styles/bootstrap.min.css" />
                <link rel="stylesheet" href="/styles/owl.carousel.min.css" />
                <link rel="stylesheet" href="/styles/style.css" />
                <link rel="stylesheet" href="/styles/responsive.css" />
                <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.13.1/datatables.min.css"/>
            </Head>
            <body>
            <Main />
            <NextScript>
                <Script src="/scripts/jquery-3.6.0.min.js"></Script>
                <Script src="https://cdn.datatables.net/v/dt/dt-1.13.1/datatables.min.js" ></Script>
                <Script src="/scripts/bootstrap.min.js" ></Script>
                <Script src="/scripts/owl.carousel.min.js" ></Script>
                <Script src="/scripts/theme.js" ></Script>
                <Script src="/scripts/main.js" strategy="afterInteractive" ></Script>
            </NextScript>
            </body>
        </Html>
    );
}