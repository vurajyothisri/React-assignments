import React,{useState,useEffect} from "react"
import axios from "axios"
import MovienotFound from "./movienotfound"
import Defaultmovies from "./defaultmovies2"
const Moviewyear=(props)=>{
   var forinput=props.input.trim();
  //  var foryear=props.year;
  
  
   const [details,updatedetails]=useState([])// to store the details  from api like containe
    const [found,updatefound]=useState(true)//if api sends details or not if data avilable it will dispaly the information or not found message
    const [defaultmovie,updatedefault]=useState(true)// before asking for results they will display that are import from defaultmovies1 after submitting they will not display
  
    useEffect(()=>{
      const result=`http://www.omdbapi.com/?apikey=5778591a&s=${forinput}`
      const fetchdetails=async()=>{
        
        try{
        
            const response=await axios.get(`${result}`)
            console.log(response.data)
                
              if(response.data.Response==='True'){
              // if data avilable we store the data in details by update details
                updatedetails(response.data.Search)
                updatedefault(false)
                updatefound(true)
              }
              else{
                //if data not avilable we display error message
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
    },[forinput])
    
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
                 <div className="Movies_conatiner" >
          
                  {details.map((movie) => (
                      <div key={movie.imdbID} className="searchnamecards">
                           <div>
                               <img src={movie.Poster} alt="No poster Available" className="searchcardimg" />
                           </div>
                           <div className="searchcardcontent">
                               <h4>Title:{movie.Title}</h4>
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

