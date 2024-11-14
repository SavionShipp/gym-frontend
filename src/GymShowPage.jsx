import { useLoaderData } from "react-router-dom";


export function GymShowPage() {
  const routines = useLoaderData();



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

    </div> 
  );
  



}
