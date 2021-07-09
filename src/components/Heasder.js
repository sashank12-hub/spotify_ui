import styles from './header.module.css'

import {useEffect,useState} from 'react'
const Heasder = () => {
const [picture, setpicture] = useState("https://i.ibb.co/SP2j2dD/Annotation-2021-07-06-202022.png");
    
  
    function handleResize() {
        if(window.innerWidth<=600){
            setpicture("https://i.ibb.co/42V8ChP/Annotation-2021-07-07-090845.png"
            )
        }
        else{
            setpicture("https://i.ibb.co/SP2j2dD/Annotation-2021-07-06-202022.png")
        }
      
  }
  
      window.addEventListener('resize', handleResize)
  
    return (
        <div className={styles.header}>
        <img src={picture} alt="pic"
  //  src="https://digital.hbs.edu/platform-rctom/wp-content/uploads/sites/4/2018/11/spotify-banner-700x200.png"
        />
            
        </div>
    )
}

export default Heasder
