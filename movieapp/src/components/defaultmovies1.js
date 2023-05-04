import React from "react";


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
            imdbID:"tt3679040",
            Poster:"https://m.media-amazon.com/images/M/MV5BMDU3YjlkYjUtYzBmNi00M2ZkLThjY2EtZDhiMjViMzE1NjFhXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_SX300.jpg",
            Title:"Kisi Ka Bhai Kisi Ki Jaan",
            Released:"21 Apr 2023",
            Genre:"Action, Comedy, Drama",
            Language:"Hindi",
            Plot:"The eldest brother refuses to marry since he believes it may create disharmony in his big family. His brothers, who've already found partners, come together to find a match for him.",
           
        },
        {
            imdbID:"tt5635026",
            Poster:"https://m.media-amazon.com/images/M/MV5BZTIzNTQ0ZTYtZGIwOC00NzIxLWI0OWMtY2JlNTNiOTM1MWZhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
            Title:"Peter Pan & Wendy",
            Released:"28 Apr 2023",
            Genre:"Action, Adventure, Comedy",
            Language:"English",
            Plot:"Based on J. M. Barrie's novel Peter and Wendy and inspired by the 1953 animated classic, Peter Pan and Wendy is the timeless tale of a young girl who, defying her parents' wishes to attend boarding school, travels with her two you..."
           
        }
    ]
    // 
    return(

        <>
      
            {
                defaultmovies.map((m)=>{
                    return(
                <div key={m.imdbID}>
                        <div>
                             <img src={m.Poster} alt="poster" />
                         </div>
                     <div>
                         <p> Tilte:{m.Title}</p>
                         <p>Release:{m.Released}</p>
                        <p>Genre:{m.Genre}</p>
                        <p>Language:{m.Language}</p>
                        <p>Plot:{m.Plot}</p>
                    </div>
                </div>
                    )
                })
            }
      
        </>
    );
}
export default DefaultMovies1