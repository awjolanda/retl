import React, { useEffect, useState } from 'react';
import {deleteReview, getEmperorById, getReviews, updateReview} from '../lib/api';
import {Link, useParams} from 'react-router-dom';
import styles from "./emperor.module.css"

const Emperor = () => {
    const {id} = useParams()
    const [review, setReview] = useState([]);
    const [emperor, setEmperor] = useState([]);

    useEffect(() => {
        async function load() {
            try{
                const r = await getReviews(id)
                setReview(r)
                const e = await getEmperorById(id)
                setEmperor(e)
            } catch(e) {
                console.log(e)
            }
        }
        load()
    }, [])

    const handleSubmitDelete = async (reviewItem) => {
        await deleteReview(reviewItem); // Call the deleteReview function with the reviewItem
        const updatedReviews = review.filter((item) => item !== reviewItem); // Remove the deleted review from the state
        setReview(updatedReviews); // Update the state with the updated reviews
    };


    return (
        <>
            <Link className={styles.buttonContainer} to={`/new/${id}`}>
                <button className={styles.button}>Create</button>
            </Link>
            <div className={styles.emperorContainer}>
                {emperor.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className={styles.emperorContent}>
                                {item.image && (
                                    <div className={styles.emperorImageContainer}>
                                        <img src={item.image} alt={`Image of ${item.name}`} className={styles.emperorImage} />
                                    </div>
                                )}
                                <div className={styles.emperorDetails}>
                                    <div className={styles.emperorDetailsColumn}>
                                        <p>Name: {item.name}</p>
                                        <p>Full Name: {item.name_full}</p>
                                        <p>Birth: {item.birth}</p>
                                        <p>Death: {item.death}</p>
                                        <p>Birth City: {item.birth_cty}</p>
                                        <p>Birth Province: {item.birth_prv}</p>
                                        <p>Rise: {item.rise}</p>
                                    </div>
                                    <div className={styles.emperorDetailsColumn}>
                                        <p>Reign Start: {item.reign_start}</p>
                                        <p>Reign End: {item.reign_end}</p>
                                        <p>Cause of Death: {item.cause}</p>
                                        <p>Killer: {item.killer}</p>
                                        <p>Dynasty: {item.dynasty}</p>
                                        <p>Era: {item.era}</p>
                                        <p>Notes: {item.notes}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.emperorReviews}>
                                {review.map((reviewItem, index) => {
                                    return (
                                        <div key={index}>
                                            <h3>Review</h3>
                                            <p>Rating: {reviewItem.rating}</p>
                                            <p>Review: {reviewItem.review}</p>
                                            <p>User: {reviewItem.user}</p>
                                            <button onClick={() => handleSubmitDelete(reviewItem)}>Delete</button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Emperor;
