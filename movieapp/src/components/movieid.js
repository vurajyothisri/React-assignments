import React,{useState,useEffect} from "react";
import axios from "axios"
import DefaultMovies1 from "./defaultmovies1";
import MovienotFound from "./movienotfound";
const Moviewid=({id})=>{
const [details,updatedetails]=useState({})// to store the details  from api like container
const [idfound,updatefound]=useState(true)//if api sends details or not if data avilable it will dispaly the information or not found message
const [defaultmovies,updatedefault]=useState(true)// before asking for results they will display that are import from defaultmovies1 after submitting they will not display

useEffect(()=>{
    
    const fetchdetails=async()=>{
        try{
            
            const response=await axios.get(`http://www.omdbapi.com/?apikey=5778591a&i=${id}`)
            const res=response.data
            if(response.data.Response==='True'){
                //if data available we stire in details
                updatefound(true)
                updatedefault(false)
                updatedetails(res)
            }
            else{
              //if data not availbale display error message
                updatefound(false)
                updatedefault(false)
            }
          
            
        }
        catch(error){
            console.log("error: ",error)
           alert("Something is went wrong with network")
        }
    }
    if(id!==""){
        fetchdetails()
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

                        <div className="id1">
                            <div>
                                <img src={details.Poster} alt="No poster available"  className="idcardimg"/>
                            </div>
                            <div className=".idcardcontent">
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