/* eslint-disable jsx-a11y/heading-has-content */
import styles from "./main1.module.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Main1 = ({text,id}) => {
//  const window ={
//   width: Window.screen.width,
//   height: Window.screen.height
// }
 const scroll=(direction)=>{

  let scrollCompleted = 0;
  var slideVar = setInterval(function(){
   
    var container=document.getElementById(`${id}`)
      if(direction === 'left'){
       
        if(window.innerWidth<=600){
         
          container.scrollLeft -= 25;
        }
        else{
          container.scrollLeft -= 10;
        }
         
      } else {
        if(window.innerWidth<=600){
          container.scrollLeft += 25;
        }
        else{
          container.scrollLeft += 10;
        }
         
      }
      scrollCompleted += 10;
      if(scrollCompleted >= 100){
          window.clearInterval(slideVar);
      }
  }, 70);

 }
  return (
    <div className={styles.content}>
      <div className={styles.heading}>
        <p>{text}</p>
        <h3 className={styles.fancy}></h3>
        <div  onClick={()=>scroll("left")}>
        <ArrowBackIosIcon className={styles.icon}/>
        </div>
        <div  onClick={()=>scroll('right')}>
        <ArrowForwardIosIcon className={styles.icon}/> 
        </div>
        
        
      </div>
    </div>
  );
};

export default Main1;
