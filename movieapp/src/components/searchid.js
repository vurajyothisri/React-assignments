import React,{useState} from "react";
import Moviewid from "./movieid.js"
import "./style.css"
const Searchid=()=>{
    const [Inputid,Updateid]=useState("")//to take input values
    const [sendId,updateSendId]=useState("")//to send input values because without submiiting it will takw input value and display the data becuse we use props so the pages is loading frequently we calling it 
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
         <h1 className="mainheading">Enter with imdbId</h1>
      
         <form  className="form">
                <input type="text" placeholder={Placeholder?"Enter id":"Id"} onChange={searchforid} value={Inputid}  
              className="input"  />
                 <button onClick={searchId}  className="button">Search</button>
          </form>

          {
            searchwithvalue?
            (
                <p className="errormessage">Enter the value in the input box</p>
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
