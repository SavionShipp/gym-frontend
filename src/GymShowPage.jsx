import { useLoaderData } from "react-router-dom";
import axios from 'axios';
import { GymNew } from "./GymNew";

export function GymShowPage() {
  const routines = useLoaderData();

  const handleCreate = (exercise,params, successCallback) => {
    console.log("handleCreate", params);
    axios.post(`http://localhost:3000/exercise/${exercise.id}.json`, params)
      .then((response) => {
        console.log(response.data); 
        successCallback();
      })
      .catch((error) => {
        console.error("Error creating exercise:", error); 
      });
  };

  console.log(routines);

  return (
    <div>
      {routines.map((routine) =>(
        <div key={routine.id}>
          <img src={routine.user.image_url} alt="profile image" />
          <h1>Name:{routine.user.name}</h1>
          <h1>Email:{routine.user.email}</h1>
          <h1>Exercises</h1>
          <h1>Workout:{routine.exercise.name}</h1>
          <h1>description:{routine.exercise.description}</h1>
          <img src={routine.exercise.image_url} />
          <video controls>
            <source src={routine.exercise.image_url} type="video/mp4" />
             Your browser does not support the video tag.
          </video>
        </div>
      ))}
      <GymNew onCreate={handleCreate} />
    </div> 
  );
  



}
