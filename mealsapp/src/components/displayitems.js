import React,{useState,useEffect} from "react";
import Notfound from "./notfound";
import axios from "axios";
import './Style.css'
const Displayitems=({value})=>{
    const [Data,updateData]=useState([])
    const [Found,updateFound]=useState(false)
    const [Meassage,updateMessage]=useState(false)

    useEffect(()=>{
        const FetchDetails=async()=>{
            try{
                const results=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
                console.log(results.data.meals[0])
                updateData(results.data.meals[0])
                updateFound(true)
                updateMessage(false)
            }
            catch{
                updateFound(false)
                updateMessage(true)
            }
            
        }
      if(value!==""){
        FetchDetails()
      }
    },[value])
    return(
        <>

       {
        Found?
        <>
         <div className="container">
            <div className="img">
                <img src={Data.strMealThumb} alt={Data.idMeal} className="image" />
            </div>
            <div className="content">
                  <h1>{Data.strMeal}</h1>
                  <div >
                  <h1> Ingredients</h1>
                      <ul className="ingredients">
                       
                        <li className="items">{Data.strIngredient1} {Data.strMeasure1}</li>
                        <li className="items">{Data.strIngredient2} {Data.strMeasure2}</li>
                        <li className="items">{Data.strIngredient3} {Data.strMeasure3}</li>
                        <li className="items">{Data.strIngredient4} {Data.strMeasure4}</li>
                        <li className="items">{Data.strIngredient5} {Data.strMeasure5}</li>
                        <li className="items">{Data.strIngredient6} {Data.strMeasure6}</li>
                        <li className="items">{Data.strIngredient7} {Data.strMeasure7}</li>
                        <li className="items">{Data.strIngredient8} {Data.strMeasure8}</li>
                        <li className="items">{Data.strIngredient9} {Data.strMeasure9}</li>
                        <li  className="items">{Data.strIngredient10} {Data.strMeasure10}</li>
                        <li className="items">{Data.strIngredient11} {Data.strMeasure11}</li>
                        <li className="items">{Data.strIngredient12} {Data.strMeasure12}</li>
                        <li className="items">{Data.strIngredient13} {Data.strMeasure13}</li>
                        <li className="items">{Data.strIngredient14} {Data.strMeasure14}</li>
                        <li className="items">{Data.strIngredient15} {Data.strMeasure15}</li>
                        <li className="items">{Data.strIngredient16} {Data.strMeasure16}</li>
                        <li className="items">{Data.strIngredient17} {Data.strMeasure17}</li>
                        <li className="items">{Data.strIngredient18} {Data.strMeasure18}</li>
                        <li className="items">{Data.strIngredient19} {Data.strMeasure19}</li>
                        <li className="items">{Data.strIngredient20} {Data.strMeasure20}</li>
                      </ul>
                  </div>
                 
                 
            </div>
            

         </div>
         <div className="instructions">
         <h1>Instructions</h1>
            {Data.strInstructions}
       </div>
       <p className="video">Youtube video: <a href={Data.strYoutube}>Link</a></p>
        </>

        :
        ""
       }
       {
        Meassage?
        <Notfound />
        :
        ""
       }
        </>
    )
}
export default Displayitems