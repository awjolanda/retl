import React, { useEffect, useState } from 'react';
import {getAllEmperors, getReviewById} from '../lib/api';
import styles from './list_all.module.css';
import {Link, useParams} from 'react-router-dom';


const Emperor = () => {
    const {id} = useParams()
    const [review, setReview] = useState([]);

    useEffect(() => {
        async function load() {
            try{
                const m = await getReviewById(id)
                setReview(m)
                console.log(m)
            } catch(e) {
                console.log(e)
            }
        }
        load()
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Emperor;