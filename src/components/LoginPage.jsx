import { useRef, useState } from "react";
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


// import { Link } from "react-router-dom";

const LoginPage = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [isErrorMessage, setIsErrorMessage] = useState(null);

  const navigate = useNavigate();
  

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function toggleLoginButton(e) {
    e.preventDefault();
    // setIsSignIn(false)
    if (isSignIn === true){
      setIsSignIn(false);
    } else {
      setIsSignIn(true);
    }
  }


  function handleLoginForm(event){
    event.preventDefault();
    const message = checkValidate(email.current.value, password.current.value)

    setIsErrorMessage(message)

    if(message){
        return;
    }


    //sign up
    if(!isSignIn){
        
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setIsErrorMessage(`${errorCode} ${errorMessage}`)
  });
  navigate("/home")
  
    }
    else{
        //sign in
        
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setIsErrorMessage(`${errorCode} ${errorMessage}`)
  });
    }
    navigate("/home")
  }


  


  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          {isSignIn ? "Sign In Into Your Courses" : "Sign Up"}
        </h2>
        <form>
          {isSignIn !== true && (
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Name"
              >
                Name
              </label>
              <input
                type="Name"
                id="name"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ref={name}
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ref={email}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ref={password}
            />
          </div>
          {isSignIn === true && (
                <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
                  Forgot your password?
                </a>
              </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={handleLoginForm}
            
          >
            {isSignIn ? 'Sign In' : 'Sign up'}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          {isSignIn ? "Don't have an account " : "Already have an account "}
          <button
            onClick={toggleLoginButton}
            className="text-blue-600 hover:text-blue-700"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
