import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {   
    authenticationLinks = (
      <div>
        <a href="/login"> Login</a> | 
        <a href="/signup"> Signup</a>
      </div>
    )
  }  else {  
    authenticationLinks = (
      <LogoutLink />
    )
  }
  return (
    <header>
      <nav>
        <div> 
          <Link to="/">GymBuddy</Link> |
          <Link to="/exercisenew"> New Exercise</Link> |
          {authenticationLinks}
        </div>
      </nav>
      {/* {authenticationLinks} */}
    </header>
  )
}