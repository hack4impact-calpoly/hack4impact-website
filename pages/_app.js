import '../styles/global.css';
import Head from 'next/head';
import {Container} from "react-bootstrap";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import '../styles/stickyFooter.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//only use for CSS applied to all pages and react bootstrap import
export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
            <title>Hack4Impact Cal Poly</title>
            <meta
                name="description"
                content="Welcome to Hack4Impact Cal Poly. Learn about our mission, projects, and more."
            />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="images/png" href="/icons/favicon-32x32.png" sizes="32x32" />
            <link rel="shortcut icon" href="/icons/favicon.ico" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossOrigin="anonymous"
             />
            </Head>
            <div className="Site">
                <div className="Site-content">
                    <Header /> 
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                </div>
                <Footer />
            </div>
        </div>
    )
    
}
