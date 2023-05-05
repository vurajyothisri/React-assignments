import React,{useState} from "react";
import Moviewid from "./movieid.js"
const Searchid=()=>{
    const [Inputid,Updateid]=useState("")//to take input values
    const [sendId,updateSendId]=useState("")//to send input values
    const [Placeholder,Updateplaceholder]=useState(true)//to update placeholder
    const [searchwithvalue,updatesearchwithvalue]=useState(false)//to send error message when user mention name
    const searchforid=(e)=>{
        Updateid(e.target.value)
    }
    const searchId=(e)=>{
        Updateplaceholder(false)
        e.preventDefault() 
        if(Inputid.trim().length ===0)
        {
            updatesearchwithvalue(true)
        }
        else {
            updateSendId(Inputid)
            Updateid("")
            updatesearchwithvalue(false)
        }
    }
    return(
        <>
         <h1>Enter with imdbId</h1>
      
         <form >
                <input type="text" placeholder={Placeholder?"Enter id":"Id"} onChange={searchforid} value={Inputid} 
                
                />
                 <button onClick={searchId} >Search</button>
          </form>

          {
            searchwithvalue?
            (
                <p>Enter the value in th input box</p>
            )
            :
            (
                <></>
            )
          }
          <Moviewid id={sendId} />
        </>
    );
} 
export default Searchid
