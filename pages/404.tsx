
import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/404.module.css"

const PageNotFound: NextPage = () => {

    return (
        <>
        
            <div className='content_block'>
                <div className={`${styles.fof} ${styles.gradient}`}>
                    404
                    <p className={styles.fof_text}>Page Not Found</p>
                </div>


                <div className={styles.fof_button}>
                    <Link href={"/"}>
                        <button className={styles.button}>
                            Home
                        </button>
                    </Link>
                </div>
            </div>

        </>
    );

}

export default PageNotFound