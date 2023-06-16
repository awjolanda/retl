import React from 'react';
import SPQR from '../ASSest/SPQR_sign.png';
import styles from './home.module.css';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className={styles.container}>
            <h1>VENI VIDI VICI</h1>
            <Link to="/list_all"><img className={styles.image} src={SPQR}/></Link>
            <h1>MMXXIII</h1>
        </div>
    )
}

export default Home;