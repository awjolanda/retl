import Colo from "../ASSest/580b585b2edbce24c47b2d68.png";
import React from "react";
import styles from './naver.module.css'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.naver}>
            <Link to={"/"}>
                <img className={styles.image} src={Colo} alt="HOME HERE"/>
            </Link>
            <h2>VNVS COMES ROMANVS PRO BONO IMPERII</h2>
        </div>
    )
}

export default Home;