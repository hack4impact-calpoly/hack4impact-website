import '../styles/global.css';
import Head from 'next/head';
import {Container} from "react-bootstrap";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import '../public/styles/stickyFooter.css';

//only use for CSS applied to all pages and react bootstrap import
export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="%PUBLIC_URL%/images/H4I-world.png" />
                <meta
                name="description"
                content="Welcome to Hack4Impact Cal Poly. Learn about our mission, projects, and more."
                />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/images/H4I-world.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <title>Hack4Impact Cal Poly</title>
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossOrigin="anonymous"
                />
            </Head>
            <div className="Site">
                <div className="Site-content">
                    {/* <Header /> */}
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                    {/* <Footer /> */}
                </div>
                <Footer />
            </div>
        </div>
    )
    
}