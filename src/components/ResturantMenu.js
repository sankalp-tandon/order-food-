import useResturantMenu from "../utils/useResturantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResturantCategory from "./ReaturantCategory";

const ResturantMenu = ()=>{
    const {resId}= useParams();
    const resMenu = useResturantMenu (resId);
   
    if(resMenu === null )  return <Shimmer/> ;  
    const { name, cuisines , costForTwoMessage } = resMenu?.cards[2]?.card?.card?.info  ;
    const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
    const categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c)=>
     c?.card?.["card"]?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
     return   (
        <div className="menu text-center">
            <h1 className="text-center font-bold my-4 text-2xl "> {name} </h1>
            <h2 className="text-center my-6 font-bold text-xl ">{cuisines.join(" , ")} - {costForTwoMessage} </h2>
            {categories.map((category) => (
              <ResturantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
            ))
            }
            {/* <ul className="text-center">
              {  itemCards.map(
                (item) => <li key = {item.card.info.id} > {item.card.info.name}  - {"Rs."} {item.card.info.price / 100 } </li>
              )} */}
              {/*  its just to list out what we have to print or get a idea of where to use map */ }
                {/* <li> {itemCards[0].card.info.name}</li>
                <li> {itemCards[1].card.info.name} </li>
                <li> {itemCards[2].card.info.name} </li> */}
            
        </div>
     )
}

export default ResturantMenu;