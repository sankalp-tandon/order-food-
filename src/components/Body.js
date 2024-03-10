import { useEffect, useState } from "react";  
import ResturantCard , {withPromotedLabel} from "./ResturantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const RestrauntCardPromoted = withPromotedLabel(ResturantCard);
const Body = () =>
{    // Local state variable - super powerful variable 
  const [ listOfResturants , setListOfResturant ] = useState([]);
  const [filteredResturant , setFilteredResturant] = useState([]);
  const [searchText , setSearchText] = useState("");

  useEffect(()=>{
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6147804&lng=77.2776579&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" ) ;
    const json =  await data.json() ;
   setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
   
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
    {
      return (
      <h1>
           looks like you are offline!! please check your internet connection..
      </h1>
      )
    }

    if(listOfResturants.length === 0)
    {
      return <Shimmer/>;
    }
    
  return (<div className="body">
    <div className="filter flex">
     <div className="search  p-4 m-4 ">
      <input type="text" className="search border border-solid border-black mr-4" value={searchText}
       onChange={(e)=>{
        setSearchText(e.target.value)}}
        />
      <button className="search-btn px-4 py-2 bg-green-100 rounded-lg" 
      onClick={()=>{
        const filteredResturant = listOfResturants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
        setFilteredResturant(filteredResturant);
      }}
      > 
      Search </button>
     </div>
     <div className="flex items-center">
     <button className="filter-btn bg-gray-200 px-4 py-2 rounded-lg " 
      onClick={()=> 
        {const filteredList = listOfResturants.filter(
          (res)=> res.info.avgRating > 4) ; 
          
        setFilteredResturant(filteredList);}
      }>
        Top Rated Resturants 
      </button>
     </div>
    </div >

  <div className="res-container flex flex-wrap"> 
   {filteredResturant.map((resturant) =>
   ( 
   <Link 
   key={resturant.info.id}
   to={"/Restaurant/"+ resturant.info.id}> 
   {resturant.info.promoted ? <RestrauntCardPromoted resdata = {resturant}/> : <ResturantCard resdata = {resturant}/>}
   </Link> 
   ))
   }
  </div>
</div>)
}
export default Body ;
