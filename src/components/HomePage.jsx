import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function HomePage(){
    return (
        <div>
             <NavBar />    
             <Outlet />              
        </div>
    )
}

export default HomePage;