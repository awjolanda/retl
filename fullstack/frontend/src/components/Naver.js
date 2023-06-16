import Colo from "../ASSest/580b585b2edbce24c47b2d68.png";
import React from "react";
import styles from './naver.module.css'

const Home = () => {
    return (
        <div className={styles.naver}>
            <img className={styles.image} src={Colo}/>
            <h2>VNVS COMES ROMANVS PRO BONO IMPERII</h2>
        </div>
    )
}

export default Home;