import React,{useState} from "react";
import Moviewyear from "./displaymovie.js";


const Userinput=()=>{
    const [inputvalue,upadateinput]=useState("")//for taking name of the movie
    const [find,updatefind]=useState("");// for sending name of the movie
    const [year,updateyear]=useState("");//for taking year
    const [cyear,upadatecyear]=useState("")// for sending year
    const [mentionyear,updatementionyear]=useState(true)//where to when year given or when year is not given
    const [searchwithvalue,updatesearchwithvalue]=useState(false)//when user dosen't mention name  it will show error
    const [Placeholder,Updateplaceholder]=useState(false)//To remian placeholder
    //for movie name search
    const search=(e)=>{
          upadateinput(e.target.value)
        
    }
    const yearmentoined=(e)=>{
        updateyear(e.target.value)
    }
   
    const submited=(e)=>{
        Updateplaceholder(true)
        e.preventDefault() 
        //if user submit empty form
        if(inputvalue.trim().length ===0){
            updatesearchwithvalue(true)
        }
        //if user mention name of the movie
        else{
            updatesearchwithvalue(false)
            Updateplaceholder(true)
             //to update the find value
            updatefind(inputvalue)
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
        
       
      
        //to clear the movie name field 
       
        upadateinput("  ")
         //to clear the year field
         updateyear(" ")
         
         return;
    }
    //for id search
    
    return(
   <>
   <h1>Enter the Movie Name</h1>
      <form>
          <input type="text" placeholder={Placeholder?"Enter name":"Name"} onChange={search} value={inputvalue}/>
          <input type="text" placeholder="Enter year optional"  value={year} onChange={yearmentoined}/>
          <button  onClick={submited} >Search</button>
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
     
        {/* for name */}
         {

            mentionyear?(
                <Moviewyear input={find}/> //if user mention only name of the movie it will go this page
            ):(
                <Moviewyear input={find.trim()} year={cyear.trim()} />// if the user mention year
            )
         }
         
        
       
  </>
    );

}
export default Userinput