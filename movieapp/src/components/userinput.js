import React,{useState} from "react";
import Moviewyear from "./displaymovie.js";
import Moviewid from "./moviewid.js";

const Userinput=()=>{
    const [inputvalue,upadateinput]=useState("")//for taking name of the movie
    const [find,updatefind]=useState("");// for sending name of the movie
    const [year,updateyear]=useState("");//for taking year
    const [cyear,upadatecyear]=useState("")// for sending year
    const [mentionyear,updatementionyear]=useState(true)//where to when year given or when year is not given
    const [inputid,updateid]=useState("")
    const [sendid,updatesendid]=useState("")
    // const [id,updateid]=useState(false)
    //for movie name search
    const search=(e)=>{
          upadateinput(e.target.value)
        
    }
    const yearmentoined=(e)=>{
        updateyear(e.target.value)
    }
   
    const submited=(e)=>{
        e.preventDefault() 
        //if user submit empty form
        if(inputvalue===""){
            alert("please enter the movie name")
            return;
        }
//user mention year or not
        if(year===""){
            updatementionyear(true)
            upadatecyear("")
        }        
        else{
            upadatecyear(year)
            updatementionyear(false)
        }
        
        //to update the find value
        updatefind(inputvalue)
        //to clear the movie name field 
       
        upadateinput("  ")
         //to clear the year field
         updateyear(" ")
         return;
    }
    //for id search
    const searchforid=(e)=>{
        updateid(e.target.value)
    }
    const searchid=(e)=>{
        e.preventDefault() 
        if(inputid==="")
        {
            alert("please enter the id")
        }
        updatesendid(inputid)
        // updateid(true)
    }
    return(
   <>
   <h1>Enter the moviname</h1>
      <form onSubmit={submited}>
          <input type="text" placeholder="Enter Title of the movie" onChange={search} value={inputvalue}/>
          <input type="text" placeholder="Enter year optional"  value={year} onChange={yearmentoined}/>
          <button type="submit" >Search</button>
      </form>
      <h1>Enter the id if you know</h1>
      <form>
        <input type="text" placeholder="enter the id of the movie" onChange={searchforid} value={inputid} />
        <button onClick={searchid}>Search</button>
      </form>
        {/* for name */}
         {

            mentionyear?(
                <Moviewyear input={find}/> //if user mention only name of the movie it will go this page
            ):(
                <Moviewyear input={find.trim()} year={cyear.trim()} />// if the user mention year
            )
         }
         {/* for id */}
        
        <Moviewid id={sendid} />
  </>
    );

}
export default Userinput