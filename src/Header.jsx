import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {   
    authenticationLinks = (
      <div>
        <a href="/login" className="hover:text-gray-300"> Login</a> | 
        <a href="/signup" className="hover:text-gray-300"> Signup</a>
      </div>
    )
  }  else {  
    authenticationLinks = (
      <LogoutLink />
    )
  }
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold"> 
          <Link to="/" className="hover:text-orange-300 pr-80">GymBuddy</Link> 
          <span className="pr-60"></span>
          <Link to="/exercisenew" className="hover:text-gray-300 pl-80"> New Exercise</Link> 
          {authenticationLinks} 
          {/* <LogoutLink className="hover:text-gray-300"/> | */}
          <Link to="/hearts" className="hover:text-gray-300"> Liked</Link>
        </div>
      </nav>
      {/* {authenticationLinks} */}
    </header>
  )
}