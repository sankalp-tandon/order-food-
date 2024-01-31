import { useEffect } from "react";


const ResturantMenu = ()=>{
    useEffect( () => {
        fetchMenu();
    },[] );
                            //  const fetchMenu = async()=>{
                            //     const dataMenu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6147804&lng=77.2776579&restaurantId=438435&catalog_qa=undefined&submitAction=ENTER");
                            //  const jsonMenu =  await dataMenu.json();
                            //  console.log(jsonMenu);

                            // };
    const fetchMenu = async () => {
        try {
          const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6147804&lng=77.2776579&restaurantId=438435&catalog_qa=undefined&submitAction=ENTER");
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.error('Error fetching menu:', error);
        }
      };
      
      fetchMenu();

     return  (
       
        <div className="menu">

            <h1>name of resturant</h1>
            <h2>menu</h2>
            <ul>
                <li> briyani </li>
                <li> burger </li>
                <li> diet Coke </li>
            </ul>
        </div>
     )
}

export default ResturantMenu;