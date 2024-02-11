import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_Api } from "../utils/constants";


const ResturantMenu = ()=>{
    const [ resMenu , setResMenu ] = useState(null);
    const {resId}= useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);               
    const fetchMenu=  async() => {
        // normal api
        const data =  await fetch( Menu_Api + resId );
        
        // cors proxy api 
        // const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D28.6147804%26lng%3D77.2776579%26restaurantId%3D438435%26catalog_qa%3Dundefined%26submitAction%3DENTER");
        const json =  await data.json();
        console.log(json);
        setResMenu(json.data);
    }
    if(resMenu === null )  return <Shimmer/> ;  
    const { name, cuisines , costForTwoMessage } = resMenu?.cards[0]?.card?.card?.info  ;
    const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ;
    console.log(itemCards);

     return   (
       
        <div className="menu">

            <h1>{name} </h1>
            <h2>{cuisines.join(" , ")}    - {costForTwoMessage} </h2>
            <h2> Menu </h2>
            <ul>
              {  itemCards.map(
                (item) => <li key = {item.card.info.id} > {item.card.info.name}  - {"Rs."} {item.card.info.price /100} </li>
              )}
              {/*  its just to list out what we have to print or get a idea of where to use map */ }
                {/* <li> {itemCards[0].card.info.name}</li>
                <li> {itemCards[1].card.info.name} </li>
                <li> {itemCards[2].card.info.name} </li> */}
            </ul>
        </div>
     )
}

export default ResturantMenu;