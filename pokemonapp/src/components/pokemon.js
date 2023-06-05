import axios from "axios"
import React,{useState,useEffect} from "react"
import './style.css'


function Pokemon({input}){
// input was user given value
  const [details,updatedetails]=useState({})// to update the pokemon value or gather the values using input
  const [available,setavailable]=useState(false)//data available or not
  const [defaultpokemon,updatedefault]=useState({}) //defalut pokemon details
  const [defaultpokemonupload,setupload]=useState(true) // for default pokemon data available or  not and also we for when data is not found 
  
 
  const fetch=async()=>{
    try{  
      setavailable(true) 
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
        const{name,id,weight,height,sprites,abilities,types}=response.data // detstructuring th data
        const abilityName=abilities.map((x)=>x.ability.name)// accessing values 
        const abilitytype=types.map((y)=>y.type.name)// accesing values
       updatedetails({name,id,weight,height,sprites,abilities:abilityName,types:abilitytype})
      
      
    }
    catch (error) {
          setavailable(false) // if data is not avilable
          setupload(false)// use this for both default one and information not found, so we put false when information is not found
        console.log("Error occured:", error);
        updatedetails({}); // Reset details to empty object on error
        
      
      }
  };
  const defaultone="ditto"
  // for default pokemon
  const fetchdefault=async()=>{

    try{
    const response1=await axios.get(`https://pokeapi.co/api/v2/pokemon/${defaultone}`);
    const{name,id,weight,height,sprites,abilities,types}=response1.data
    const abilityName1=abilities.map((x)=>x.ability.name)
        const abilitytype2=types.map((y)=>y.type.name)
    updatedefault({name,id,weight,height,sprites,abilities:abilityName1,types:abilitytype2})
  
  //  setupload(true)
    }
    catch(error){
      console.log("due to:",error)
      console.log("data not found")
      // setupload(false)
    }
  
    }
  
    //use effect call fetch when userr give the input only
 useEffect(()=>{
  if(input!==""){
    fetch()
  }
  fetchdefault()
 },[input])
// to clear the data
 const clear=()=>{
  updatedetails({});// we just empty the object
  setavailable(true)// we set true so it will not display any information because we already empty the object in the above step

 }
     
      return (
        <>
        {/* if user givne data ia avilabale  it will displaya information / */}
          {available?(

         <div className="pokemon">
          <div className="image">

          <img src={details.sprites?.other.dream_world.front_default} alt="" className="wh" />
          </div>
           
           <h2 className="mainheading">Name:{details.name&&details.name.toUpperCase()}</h2>
            <p className="details">id: <span>{details.id}</span></p>
           <p className="details"> weight:<span>{details.weight}</span></p>
           <p className="details">height:<span>{details.height}</span></p>
           <p className="details">Ability: <span>{details.abilities&&details.abilities.join(",")}</span></p>
           <p className="details">Type: <span>{details.types&&details.types.join(",")}</span></p>
         </div>

          ):( <>
         {/* if data is not avilable it comes here */}
         {/* it will show default pokemon firstly when page is uplaod because we put available false */}
         {/* here we use another condition for deafult one and information not found */}
         {/* we set defaultpokemonupload to true it will display here, we directly access one pokemon value so there is no problem   */}
         {defaultpokemonupload?(<>
          {/* /for default one displays here if pokemon not fount it will go to false statement but we can access data easily so no problem */}
         
                <div className="pokemon">
            <div className="image">
             <img src={defaultpokemon.sprites?.other.dream_world.front_default} alt=""  className="wh" />
             </div>
          
    <h2 className="mainheading">Default Name:{defaultpokemon.name}</h2>
     <p className="details">Default id:<span>{defaultpokemon.id}</span>  </p>
     <p className="details"> Default weight:<span>{defaultpokemon.weight}</span> </p>
     <p className="details">Default height:<span>{defaultpokemon.height}</span>  </p>
     <p className="details">Default Ability: <span>{defaultpokemon.abilities&&defaultpokemon.abilities.join(",")}</span> </p>
     <p className="details">Default Type: <span>{defaultpokemon.types&&defaultpokemon.types.join(",")}</span> </p></div>
         
         </>):(
// /it will display it doesn't find information which is given by user
          
         <div className="pokemon">
         <div className="image">

         <img src="https://dpemoji.com/wp-content/uploads/2023/01/Sad-dp-emoji-6.png" alt=""  className="wh"/>
         </div>
          
          <h2 className="mainheading">Name:Not found</h2>
          <p className="details">id: <span>Not Found</span></p>
          <p className="details"> weight:<span>Not Found</span></p>
          <p className="details">height:<span>Not Found</span></p>
          <p className="details">Ability: <span>Not Found</span></p>
          <p className="details">Type: <span>Not Found</span></p>
        </div>
         )}
          
          </>
      

          )}
           
         <button onClick={clear} className="clearbutton">Clear</button>
            
        </>
       
        
       );

  
}

export default Pokemon;

