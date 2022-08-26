import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lato:wght@400;700&family=Lobster&family=Montserrat:wght@300;400;500;600&family=PT+Sans:wght@400;700&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
