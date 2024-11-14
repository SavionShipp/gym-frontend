import { useLoaderData } from "react-router-dom";
import axios from 'axios';
import { GymNew } from "./GymNew";

export function GymShowPage() {
  const routine = useLoaderData();

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

  console.log(routine);

  return (
    <div>
      <h1>User</h1>
      {routine.users.map(user => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <p>Email: {user.email}</p>
          <hr />
          <img src={user.image_url} alt="profile picture" />
        </div> 
      ))}
  
      <h1>Exercise</h1>
      {routine.exercises.map(exercise => (
        <div key={exercise.id}>
          <h1>{exercise.name}</h1>
          <p>{exercise.description}</p>
          <img src={exercise.image_url} alt="exercise" />
          <p>Reps: {routine.reps}</p>
          <p>Sets: {routine.sets}</p>
        </div> 
      ))}
      <GymNew onCreate={handleCreate} />
    </div> 
  );
  



}
