import { NextPage } from "next";
import Head from "next/head";
import style from "../styles/About.module.css"
import NavBar from "../components/NavBar";

const About: NextPage = () => {



    return (
        <>
            <Head>
            <title>MagTheDev - About</title>
            <meta name="description" content="About MagTheDev" />
            <link rel="icon" href="/favicon.ico" />

            <link
                rel="preload"
                href="/assets/fonts/AtkinsonHyperlegible/AtkinsonHyperlegible-Regular.ttf"
                as="font"
                crossOrigin=""
            />
            </Head>


            <div className="content_block">

                <NavBar/>


            </div>


        </>
    );

}

export default About;