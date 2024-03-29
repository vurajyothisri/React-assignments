import React from "react";
import './style.css'
const DefaultMovies1=()=>{
    const defaultmovies=[

        {
            imdbID:"tt14411774",
            Poster:"https://m.media-amazon.com/images/M/MV5BZGE2OTk5MmEtYjllMS00ZjYzLWJjNzEtNDJmODcyYjM2YTY2XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg",
            Title:"Agent",
            Released:"28 Apr 2023",
            Genre:"Action",
            Language:"Telugu",
            Plot:"A spy with a mysterious past, who is on a mission to uncover the truth about a dangerous terrorist organization.",
        },
        {
            imdbID:"tt11905536",
            Poster:"https://m.media-amazon.com/images/M/MV5BMTczZDQwOTEtZmIzZC00YWNkLTljYmEtMzEzNjBkMmZjYTEwXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_SX300.jpg",
            Title:"Gumraah",
            Released:"07 Apr 2023",
            Genre:"Action, Crime, Thriller",
            Language:"Hindi",
            Plot:"The murder investigation of a young man , takes an unexpected turn when the cops discover that the prime suspect has a lookalike.",
           
        },
        
    ]
    // 
    return(

        <>
      <div className="idcardcontainer">
            {
                defaultmovies.map((m)=>{
                    return(
                <div key={m.imdbID} className="id">
                        <div>
                             <img src={m.Poster} alt="poster"  className="idcardimg"/>
                         </div>
                     <div className="idcardcontent">
                         <h1> Tilte:{m.Title}</h1>
                         <p><span>Release</span>:{m.Released}</p>
                        <p><span>Genre</span>:{m.Genre}</p>
                        <p><span>Language</span>:{m.Language}</p>
                        <p><span>Plot</span>:{m.Plot}</p>
                    </div>
                </div>
                    )
                })
            }
      </div>
        </>
    );
}
export default DefaultMovies1