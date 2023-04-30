import React,{useState} from "react";
import Movie from "./moviedisplay";

const Userinput=()=>{
 const [usersearch,updatesearch]=useState("");
 const [find,updatefind]=useState("");
 const search=(e)=>{
         updatesearch(e.target.value)
 }
 const submited=(e)=>{
    e.preventDefault() 
    updatefind(usersearch);
    // console.log(find)
    // updatesearch("")
 }
  return(
    <>
    <form>
        <input placeholder="Enter movie name or id" value={usersearch} onChange={search}/>
        <button onClick={submited}>Search</button>
    </form>
    <Movie input={find} />
    </>
    
  )

}
export default Userinput