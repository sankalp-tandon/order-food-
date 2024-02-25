import { useEffect, useState } from "react"
import {Menu_Api} from "./constants"

const useResturantMenu = (resId)=> {

    const [resMenu ,  setResMenu ] = useState (null);
    //Fetch data  
    useEffect(() => {
        fetchData() }
        , []  );

  const fetchData = async () => {
    const data =  await fetch( Menu_Api + resId );
    const json =  await data.json();
     console.log(json);
    setResMenu(json.data);
    };
    return resMenu ;
}
export default useResturantMenu ; 