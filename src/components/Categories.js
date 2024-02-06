 import {useState} from "react";

 function Categories({catergoryName = 'Popular', setCategoryName}){

   
 return(
 <div className="nav-middle">
    <button onClick={()=>{
        setCategoryName('Popular')
         }}>Popular</button>

    <button onClick={()=>{
        setCategoryName('Top Rated')
         }}>Top Rated</button>
    
    <button onClick={()=>{
        setCategoryName('Upcoming')
         }}>Upcoming</button>

    <button onClick={()=>{
        setCategoryName('Now Playing')
         }}>Now Playing</button>


 </div> 
 )

 }

 export default Categories