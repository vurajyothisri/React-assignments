import React,{useState,useEffect} from "react"
import axios from "axios"
import MovienotFound from "./movienotfound"
import Defaultmovies from "./defaultmovies2"
const Moviewyear=(props)=>{
   var forinput=props.input;
   var foryear=props.year;
   const result=foryear?`http://www.omdbapi.com/?apikey=5778591a&s=${props.input}&y=${props.year}`:`http://www.omdbapi.com/?apikey=5778591a&s=${props.input}`
   console.log(result) 
   const [details,updatedetails]=useState([])
    const [found,updatefound]=useState(true)
    const [defaultmovie,updatedefault]=useState(true)
 
    useEffect(()=>{
      const fetchdetails=async()=>{
        
        try{
        
            const response=await axios.get(`${result}`)
            console.log(response.data)
                
              if(response.data.Response==='True'){
                updatedetails(response.data.Search||[])
                updatedefault(false)
                updatefound(true)
              }
              else{
                updatedefault(false)
                updatefound(false)
              }
        }
        catch(error){
            console.log("Error:",error)
            alert("something went wrong with network")
           
        }
        
          
    }
        if(forinput){
            fetchdetails();
        }
        else{
          updatedefault(true)
        }
    },[forinput,foryear,result])
    return(<>
        {

          defaultmovie?
          (
            <Defaultmovies />
          )
          :
          (
          <>
         {
              found?
              (
                 <div className="Movies_conatiner">
          
                  {details.map((movie) => (
                      <div key={details.imdbID} className="card1">
                           <div>
                               <img src={movie.Poster} alt="No image Available" className="card1img" />
                           </div>
                           <div className="card1_content">
                               <h1>Title:{movie.Title}</h1>
                               <p>Year:{movie.Year}</p>
                               <p>imdbID:{movie.imdbID}</p>
                               <p>Type:{movie.Type}</p>
                           </div>
                      </div>
                    ))}
                </div>
              )
              :
              (
              <MovienotFound />
              )
          }
          
          </>


          )
        }
    </>);

}
export default Moviewyear;

