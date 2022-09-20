import React from "react";
import blogData from "../data/blog";


function About(props){
  if(props.image){
  return (
    <aside>
        <img src = {props.image} alt="blog logo"/>
         <p>{props.about}</p>
    </aside>
  )
  }else{
   return(
    <aside>
        <img src ="https://via.placeholder.com/215" alt="blog logo"/>
         <p>{props.about}</p>
    </aside>
   )

  }

}




export default About;