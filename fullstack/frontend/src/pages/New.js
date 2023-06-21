import React, { useEffect, useState } from 'react';
import {createReview} from '../lib/api';
import {Link, useParams} from 'react-router-dom';
import styles from "./new.module.css"

const Emperor = () => {
    const {id} = useParams()
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [emperorId, setEmperorId] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault()
        setEmperorId(id)
        await createReview({emperorId: id, rating, review, name, })

    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={`${styles.label}`}>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className={`${styles.input}`}
                    />
                </label>
                <label className={`${styles.label}`}>
                    Rating:
                    <input
                        type="number"
                        value={rating}
                        onChange={(event) => setRating(event.target.value)}
                        className={`${styles.input}`}
                    />
                </label>
                <label className={`${styles.label}`}>
                    Review:
                    <textarea
                        value={review}
                        onChange={(event) => setReview(event.target.value)}
                        className={`${styles.input} ${styles.textarea}`}
                    />
                </label>

                <button type="submit" className={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Emperor;
