import {LINK_URL} from "../utils/constants.js" ;

const ResturantCard = (props)=> {
    const {resdata}=props;

    
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resdata?.data ? resdata?.data : resdata?.info ; // optional chaiing 
    return (
      <div className="res-card" style={{background : "#f0f0f0"}}>
       <img className="res-logo" alt="res-logo" src={LINK_URL + cloudinaryImageId}/>
       <h3>{name} </h3>
       <h4>{cuisines.join(" , ")}</h4>
       <h4> {avgRating}</h4>
       <h4>{costForTwo} </h4>
       <h4>{resdata.info.sla.deliveryTime} mins</h4>
      </div>
    )
  }
  export default ResturantCard ; 
