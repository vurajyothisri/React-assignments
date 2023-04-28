import React,{useState} from "react"
import Pokemon from "./pokemon";
import './style.css'
const Userinput=()=>{
    const [input,updateinput]=useState(""); //to take user input
    const [find,updatefind]=useState(""); //to send the input   
    const inputvalue=(e)=>{
        updateinput(e.target.value) // targeting the user input
    }
    const submited=(e)=>{
        if(input===""){
            alert("Enter the name of the pokemon")
        }
        e.preventDefault() 
        updatefind(input)  // placing in the find value
          updateinput("") // clearing the field

    }
   
    return(
<>
        <h1 className="pokemonheading">  Pokemon </h1>

        <form className="userinput">
               
              <input  placeholder="Enter id or name of the pokemon" value={input} onChange={inputvalue}/>
              <button  onClick={submited}>Submit</button>
        </form>
        {/* using props we sending the user input */}
         <Pokemon input={find.toLowerCase()} />
        </>
    );
}
export default Userinput