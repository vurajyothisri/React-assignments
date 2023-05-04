import React,{useState,useEffect} from "react";
import axios from "axios"
import DefaultMovies1 from "./defaultmovies1";
import MovienotFound from "./movienotfound";
const Moviewid=({id})=>{
const [details,updatedetails]=useState({})
const [idfound,updatefound]=useState(true)
const [defaultmovies,updatedefault]=useState(true)
const fetch=async()=>{
    try{
        console.log(id)
        const response=await axios.get(`http://www.omdbapi.com/?apikey=5778591a&i=${id}`)
        const res=response.data
        if(response.data.Response==='True'){
            console.log("found")
            updatefound(true)
            updatedefault(false)
        }
        else{
            console.log("not found")
            updatefound(false)
            updatedefault(false)
        }
        updatedetails(res)
        
    }
    catch(error){
        console.log("error: ",error)
       alert("Something is went wrong with network")
    }
}
useEffect(()=>{
    if(id!==""){
        fetch()
    }
},[id])
return(
    
    <>
      {
             defaultmovies?
             (
                <DefaultMovies1 />
             )
             :
             (

              <>
                {
                    idfound?(
                        <>
                          <p>{details.Title?details.Title:""}</p>
                        <p>{details.Year?details.Year:""}</p>
                        </>
                    ):(
                        // <MovienotFound />
                        <p></p>
                    )
                }
              </>
             )

      }
    </>
);
}
export default Moviewid;