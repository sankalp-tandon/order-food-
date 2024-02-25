import  {useEffect, useState} from "react";

const useOnlineStatus = () =>{

 const [onlineStatus , setOnlineStatus] = useState(true);

 // we using use effect cause we have to check the online status once ie. event listner will be called once 
 useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;

}
export default useOnlineStatus ; 