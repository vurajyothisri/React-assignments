import React,{useState,useEffect} from "react";
import axios from "axios"
import DefaultMovies1 from "./defaultmovies1";
import MovienotFound from "./movienotfound";
const Moviewid=({id})=>{
const [details,updatedetails]=useState({})
const [idfound,updatefound]=useState(true)
const [defaultmovies,updatedefault]=useState(true)

useEffect(()=>{
    
    const fetchDetails=async()=>{
        try{
            console.log(id)
            const response=await axios.get(`http://www.omdbapi.com/?apikey=5778591a&i=${id}`)
            const res=response.data
            if(response.data.Response==='True'){
                console.log("found")
                updatefound(true)
                updatedefault(false)
                updatedetails(res)
            }
            else{
              
                updatefound(false)
                updatedefault(false)
            }
          
            
        }
        catch(error){
            console.log("error: ",error)
           alert("Something is went wrong with network")
        }
    }
    if(id){
        fetchDetails()
    }
    else{
        updatedefault(true)
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
                     idfound?
                     (

                        <div className="card center">
                            <div>
                                <img src={details.Poster} alt="Title"  className="cardimg"/>
                            </div>
                            <div className="cardcontent">
                                <h1>Title:{details.Title}</h1>
                                <p> <span>imdbID</span>:{details.imdbID}</p>
                                <p><span>Release</span>:{details.Released}</p>
                                <p><span>Genre</span>:{details.Genre}</p>
                                <p><span>Language</span>:{details.Language}</p>
                                <p><span>Ploat</span>:{details.Plot}</p>
                            </div>
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
    </>
);
}
export default Moviewid;