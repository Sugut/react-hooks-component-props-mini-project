import React from "react";
import Article from "./Article";

function ArticleList({posts}){

   const newList = posts.map(post=>{
      return <Article key={post.id} title={post.name} date={post.date} preview={post.preview} minutes={post.minutes}/>
   })
   return(
       <main>
           {newList}
       </main>
   )
}


export default ArticleList;