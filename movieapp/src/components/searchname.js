import React,{useState} from "react";
import Moviewyear from "./displaymovie.js";
import "./style.css"

const Userinput=()=>{
    const [Inputvalue,upadateinput]=useState("")//for taking name of the movie
    const [Find,updatefind]=useState("");// for sending name of the movie
    const [searchwithvalue,updatesearchwithvalue]=useState(false)//when user dosen't mention name  it will show error
    const [setPlaceholder,Updatesetplaceholder]=useState(true)//To remian placeholder
    //for movie name search
    const search=(e)=>{
          upadateinput(e.target.value)
        
    }
    
   
    const submited=(e)=>{
    
        e.preventDefault();
        //if user submit empty form
        if(Inputvalue.trim().length ===0){
            updatesearchwithvalue(true)
          
        }
        //if user mention name of the movie
        else{
            updatesearchwithvalue(false)
             //to update the find value
            updatefind(Inputvalue)
           
        }
              
        //to clear the movie name field 
       
        upadateinput("")
        Updatesetplaceholder(false)
        
       
    }
    //for id search
   
    return(
   <>
   <h1 className="mainheading">Enter the Movie Name</h1>
      <form className="form">
          <input type="text" placeholder={setPlaceholder?"Enter name":"NAME"} onChange={search} value={Inputvalue} className="input"/>
       
          <button  onClick={submited} className="button" >Search</button>
      </form>
      {
            searchwithvalue?
            (
                <p className="errormessage">Enter the value in th input box</p>
            )
            :
            (
                <></>
            )
          }
     
       
         
         <Moviewyear input={Find.toLowerCase()}/>
       
  </>
    );

}
export default Userinput