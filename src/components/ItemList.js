import { LINK_URL } from "../utils/constants.js";

const ItemList = ({items}) => {
    console.log(items);
    return (
        <div>
        { items.map((item) =>(
        <div key={item.card.info.id} className="w-9/12 text-start my-4 p-2 border-gray-300 border-b-2">
        <div>
            <span className="font-bold"> {item.card.info.name} - ₹ {item.card.info.price / 100} </span>
            <div> <img  className="w-3/12 " alt="Item-Image" src={LINK_URL +  item.card.info.imageId}/> 
            <button className="">Add + </button>
            </div>
        </div>
        <p className="text-xs my-2 py-2"> {item.card.info.description} </p>
        </div>))
        }
        </div>
    )
}
export default ItemList ;
