import React from "react" ;
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import ResturantMenu from "./components/ResturantMenu.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
 
const AppLayout = ()=>{
  return ( 
    <Provider store={appStore}>
    <div className="app"> 
      <Header/>
      <Outlet/>
    </div>
    </Provider>);
  };

const appRouter = createBrowserRouter([
  {
 path: "/",
  element: <AppLayout/>,
  errorElement:<Error/>,
  children:[
    {
      path:"/",
      element: <Body/>
    },
    { 
    path:"/about",
    element: <About/>,
    },
    {
      path:"/contact",
      element: <Contact/>},
    {
      path:"/Restaurant/:resId",
      element:<ResturantMenu />
    },]
}

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);

