import {LINK_URL} from "../utils/constants.js" ;
// Higher order Component :  to add promoted label on the restraunt card
export const withPromotedLabel = (ResturantCard)=> {
  return (props)=>{
       return (<div>
        <label> Promoted </label>
        <ResturantCard />
       </div>);
  };
};
const ResturantCard = (props)=> {
    const {resdata}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resdata?.data ? resdata?.data : resdata?.info ; // optional chaiing 
    return (
      <div className="res-card m-4 p-4 w-[250px] bg-orange-200 hover:bg-orange-400 rounded-lg" >
       <img className="res-logo rounded-lg" alt="res-logo" src={LINK_URL + cloudinaryImageId}/>
       <h3 className="font-bold text-lg py-2">{name} </h3>
       <h4>{cuisines.join(" , ")}</h4>
       <h4> {avgRating}</h4>
       <h4>{costForTwo} </h4>
       <h4>{resdata.info.sla.deliveryTime} mins</h4>
      </div>
    )
  }
  export default ResturantCard ; 
