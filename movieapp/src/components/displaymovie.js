import React,{useState,useEffect} from "react"
import axios from "axios"
import MovienotFound from "./movienotfound"
const Moviewyear=(props)=>{
   var forinput=props.input;
   var foryear=props.year;
   const result=foryear?`http://www.omdbapi.com/?apikey=5778591a&s=${props.input}&y=${props.year}`:`http://www.omdbapi.com/?apikey=5778591a&s=${props.input}`
   console.log(result) 
   const [details,updatedetails]=useState([])
    const [found,updatefound]=useState(false)
    const fetchdetails=async()=>{
        
        try{
        
            const response=await axios.get(`${result}`)
            console.log(response.data)
                updatedetails(response.data.Search||[])
                updatefound(true)
        }
        catch(error){
            console.log("Error:",error)
            updatedetails({})
            updatefound(false)
        }
        
          
    }
    useEffect(()=>{
        if(forinput!==""){
            fetchdetails();
        }
    },[forinput,foryear])
    return(<>
      {
        found?
        (
           <div>
{/* Array.isArray(details) && */}
                
            { Array.isArray(details) &&details.map((movie) => (
                <div key={movie.imdbID}>
                  <p>Title: {movie.Title?movie.Title:"not found"}</p>
                  <p>Released: {movie.Year?movie.Year:"notfound"}</p>
                  <p>Type:{movie.Type?movie.Type:"not found"}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
              ))}
           </div>
        )
        :
        (
       <MovienotFound />
        )
      }
    </>);

}
export default Moviewyear;