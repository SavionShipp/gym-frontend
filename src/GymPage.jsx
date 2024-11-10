import { GymIndex } from "./GymIndex"
import axios from "axios";
import { useState, useEffect } from "react";
export function GymPage() {

  const [exercises, setExercises] = useState([]);

   const handleIndex = () => {
     console.log("handleIndex");
     axios.get("http://localhost:3000/exercises.json").then((response) => {
       console.log(response.data);
       setExercises(response.data);
     });
   };

   useEffect(handleIndex, []);




  return (
    <main>
      <GymIndex exercises={exercises}/>
    </main>
  )
}