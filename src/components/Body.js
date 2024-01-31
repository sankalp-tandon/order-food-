import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer.js";


  

const Body = () =>
{    // Local state variable - super powerful variable 
  const [ listOfResturants , setListOfResturant ] = useState([]);
  const [filteredResturant , setFilteredResturant] = useState([]);
  const [searchText , setSearchText] = useState(" ");

  useEffect(()=>{
    fetchdata();
  }, []);

  const fetchdata = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6147804&lng=77.2776579&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json =  await data.json() ;
   console.log(json);
   setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listOfResturants.length === 0)
    {
      return <Shimmer/> ;
    }
    
  return (<div className="body">
    <div className="filter">
     <div className="search">
      <input type="text" className="search-box" value={searchText}
       onChange={(e)=>{
        setSearchText(e.target.value)}}
        />
      <button className="search-btn" 
      onClick={()=>{
        const filteredResturant = listOfResturants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
        setFilteredResturant(filteredResturant);
      }}
      > 
      Search </button>
     </div>

      <button className="filter-btn" 
      onClick={()=> 
        {const filteredList = listOfResturants.filter(
          (res)=> res.info.avgRating > 4) ; 
          
        setFilteredResturant(filteredList);}
      }>
        Top Rated Resturants 
      </button>

    </div >

 <div className="res-container"> 
 
 {filteredResturant.map((resturant) =>
 (
  <ResturantCard resdata = {resturant}  key={resturant.info.id}/>
 ))
 }

 </div>
  </div>)
}
export default Body ;
