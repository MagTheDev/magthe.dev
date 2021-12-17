import { NextPage } from "next";
import Link from "next/link";
import styles from '../styles/NavBar.module.css'


const NavBar: NextPage = () => {

    return (
        <>

            <div className={styles.main}>

                <Link href={"/"}>
                    <button className={styles.button}>Home</button>
                </Link>
                <Link href={"/about"}>
                    <button className={styles.button} >About</button>                
                </Link>
                <Link href={"/about"}>
                    <button className={styles.button} >Github Statistics</button>                
                </Link>
            </div>

        </>
    );
}

export default NavBar;