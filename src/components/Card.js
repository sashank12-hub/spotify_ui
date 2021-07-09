import React from 'react'
import styles from './Card.module.css'
const Card = ({src,title}) => {
    
    return (
        <div className={styles.card}>
           <img src={src}
           //'
            alt="ima"/> 
           <h5 className={styles.text}>{title}</h5>
        </div>
    )
}

export default Card
