import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Person",
                                "name": "MD Abu Shalem Alam",
                                "alternateName": ["MDALAM", "Abu Shalem", "ABUSHALEM", "MDHACKER"],
                                "url": "https://abushalem.site",
                                "jobTitle": "Cybersecurity Administrator",
                                "worksFor": {
                                    "@type": "Organization",
                                    "name": "Arosys Technologies"
                                },
                                "knowsAbout": [
                                    "Cybersecurity", 
                                    "Penetration Testing", 
                                    "Network Security", 
                                    "Ethical Hacking", 
                                    "Vulnerability Assessment", 
                                    "Data Encryption", 
                                    "AI", 
                                    "Machine Learning"
                                ],
                                "sameAs": [
                                    "https://linkedin.com/in/mdabushalem",
                                    "https://github.com/MD-HACKER07", 
                                    "https://www.instagram.com/iammd_18_"
                                ]
                            })
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument