import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from 'axios';
import { Header } from "./Header";
import { GymIndexPage } from "./GymIndexPage";
import { GymShowPage } from "./GymShowPage";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";
import { GymNewPage } from "./GymNewPage";



const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <LogoutLink />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <GymIndexPage />,
        loader: ()=>
          axios.get("http://localhost:3000/exercises.json").then(response => response.data)
      },
      {
        path: "signup",
        element: <SignupPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "/routines",
        element: <GymShowPage />,
        loader: () => axios.get(`http://localhost:3000/routines.json`).then(response => response.data)
      },
      {
        path: "/exercisenew",
        element: <GymNewPage />
      }
    ]
  }
])

function App() {
  return (<RouterProvider router={router} />
  )
}

export default App;