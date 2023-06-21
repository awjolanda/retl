import React, { useEffect, useState } from 'react';
import { getAllEmperors } from '../lib/api';
import styles from './list_all.module.css';
import { Link } from 'react-router-dom';



const List_all = () => {
    const [emperors, setEmperors] = useState([]);

    useEffect(() => {
        async function load() {
            try{
                const m = await getAllEmperors()
                setEmperors(m)
                console.log(m)
            } catch(e) {
                console.log(e)
            }
        }
        load()
    }, [])


    return (
        <div className={styles.emperorList}>
            {emperors.map((item, index) => (
                <div key={index} className={styles.emperorContainer}>
                    {item.image && (
                        <div className={styles.emperorImageContainer}>
                            <img src={item.image} alt={`Image of ${item.name}`} className={styles.emperorImage} />
                        </div>
                    )}
                    <div className={styles.emperorDetails}>
                        <p>Name: {item.name}</p>
                        <p>Full Name: {item.name_full}</p>
                        <p>Birth: {item.birth}</p>
                        <p>Death: {item.death}</p>
                        <p>Birth City: {item.birth_cty}</p>
                        <p>Birth Province: {item.birth_prv}</p>
                        <p>Rise: {item.rise}</p>
                        <p>Reign Start: {item.reign_start}</p>
                        <p>Reign End: {item.reign_end}</p>
                        <p>Cause of Death: {item.cause}</p>
                        <p>Killer: {item.killer}</p>
                        <p>Dynasty: {item.dynasty}</p>
                        <p>Era: {item.era}</p>
                        <p>Notes: {item.notes}</p>
                        <div className={styles.buttonsContainer}>
                            <Link to={`/create/${item.index}`}>
                                <button className={styles.button}>Create</button>
                            </Link>
                            <Link to={`/view/${item.index}`}>
                                <button className={styles.button}>View</button>
                            </Link>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default List_all;