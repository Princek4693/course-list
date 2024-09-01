import { signOut } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";

function NavBar() {


    const [isSignOut, setIsSignOut] = useState(false);


    function handleSignOut(){
      signOut(auth).then(() => {
        //we need to remove the user dispatch the action
    }).catch((error) => {
        // An error happened.
        console.error("Sign-out error: ", error);
    });
    }




   

    return (
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div>
              <Link to="/" className="text-2xl font-bold text-blue-600">
                Namaste Student
              </Link>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 items-center">
            <li className="list-none">
                <Link to="/home" className="text-gray-800 hover:text-blue-600 transition duration-300">
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link to="/home/about" className="text-gray-800 hover:text-blue-600 transition duration-300">
                  About
                </Link>
              </li>
              <li className="list-none">
                <Link to="/home/course" className="text-gray-800 hover:text-blue-600 transition duration-300">
                  Course
                </Link>
              </li>
              <Link to="/" onClick={handleSignOut}   className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                {isSignOut ? "Sign in" : "Sign Out"}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavBar;
  