import { useLoaderData } from "react-router-dom";
import { useState} from "react";
import axios from 'axios';
import  {GymNew}  from "./GymNew";
export function GymShowPage() {
  const [exercise, setExercise] = useState([]);

  const handleCreate = (params, successCallback) => {
         console.log("handleCreate", params);
         axios.post("http://localhost:3000/exercise.json", params).then((response) => {
           setExercise([...exercise, response.data]);
           successCallback();
         });
       };

  const user = useLoaderData();

  console.log(user);

  return (
    <div>
      <h1>Name:{user.name}</h1> 
      <hr />
      <p>Email:{user.email}</p>
      <hr />
      <img src={user.image_url} />
      <GymNew onCreate={handleCreate} />
      </div>
  );
}