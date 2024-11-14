import { useLoaderData, useNavigate } from "react-router-dom";
export function GymIndexPage() {


  const navigate = useNavigate();
  const routines = useLoaderData();

  const handleNavigate = (id) => {
    navigate(`/routines/${id}`);

  }

    
  return (
    <main>
      <div>
        <h1>All Exercises</h1>
        {routines.map((routine) => (
          <div key={routine.id}>
            <div onClick={handleNavigate} id="profile-pic">
            <img src={routine.user.image_url} alt="profile image" />
            </div>
            <img src={routine.exercise.image_url} alt="exercise image" />
            <video controls>
              <source src={routine.exercise.image_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div onClick={handleNavigate} id="index-name">
            <h4>Name: {routine.user.name}</h4>
            </div>
            <h5>Workout: {routine.exercise.name}</h5>
            <p>Description: {routine.exercise.description}</p>
            <p>{routine.sets}</p>
            <p>{routine.reps}</p>
          </div>
        ))}
      </div>
    </main>
  );
  
}