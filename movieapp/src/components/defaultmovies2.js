import React from "react";

const Defaultmovies=()=>{
    const defaultmovies=[
        {
            Poster:"https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg",
         Title:"The Hunger Games",
         Year:"2012",
         imdbID:"tt1392170",
         Type:"movie",
        },
        {
            Poster:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
         Title:"Iron Man",
         Year:"2008",
         imdbID:"tt0371746",
         Type:"movie",
        },
        {
            Poster:"https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
         Title:"RRR",
         Year:"2022",
         imdbID:"tt8178634",
         Type:"movie",
        }
    ]
    return(
        <>
        <div  className="searchcardcontainer">
        {
            defaultmovies.map((m)=>{
                return(
            <div key={m.imdbID} className="searchnamecards">
                    <div>
                         <img src={m.Poster} alt="poster" className="searchcardimg"/>
                     </div>
                 <div className="searchcardcontent">
                     <h4> Tilte:{m.Title}</h4>
                     <p><span>Year</span>:{m.Year}</p>
                    <p><span>imdbID</span>:{m.imdbID}</p>
                    <p><span>Type</span>:{m.Type}</p>
                </div>
            </div>
                )
            })
        }
        </div>
        </>
    )
}
export default Defaultmovies