

import React from 'react'
import Card from './Card'
import styles from './cardWrapper.module.css'
const CardWrapper = ({apidata,id}) => {
    return (
        <div className={styles.container} id={id}>
           {apidata.map(item=>{
              
               return (<Card src={item.photo} title={item.name}/>)
           })} 
        </div>
    )
}

export default CardWrapper
