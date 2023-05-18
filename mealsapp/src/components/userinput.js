import React,{useState} from "react";
import Displayitems from "./displayitems";
import './Style.css'
const Userinput=()=>{
 const [Search,updateSearch]=useState("")
 const [Placeholder,updatePlaceholder]=useState(true)
 const [Find,updateFind]=useState("")
//  const [Find,updateFind]=useState("")
const searchvalue=(e)=>{
    updateSearch(e.target.value)
   
}
const search=(e)=>{
    e.preventDefault()
    if(Search.trim().length===0){
        alert("Enter the Search field")
    }
    updateFind(Search)
    updateSearch("")
    updatePlaceholder(false)
}
    return(
        <>
        <form className="form">
            <input type="text" value={Search} onChange={searchvalue} placeholder={Placeholder?" Enter the name to search":"Name"}/>
            <button onClick={search} className="button">Search</button>
        </form>
        <Displayitems value={Find} />
        </>
    )
}
export default Userinput;