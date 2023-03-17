import {createBrowserRouter, RouterProvider, Router, Outlet} from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Shows from "./pages/Shows/Shows.jsx"
import Show from "./pages/Show/Show.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { children } from "react"



const Layout = () =>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/shows/:id",
        element:<Shows/>,
      },
      {
        path:"//show/:id",
        element:<Show/>,
      },
    ],
  },
  
])


function App() {
  return (
    <div className="App">
             
        <RouterProvider router = {router}/>
     
    </div>
  );
}

export default App;
