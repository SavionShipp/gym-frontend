import { useLoaderData, useNavigate } from "react-router-dom";
export function GymIndexPage() {

  const exercises = useLoaderData();
  const navigate = useNavigate();

  console.log(exercises);

  const handleShow = exercise => {
    console.log("SHOW");
    navigate(`/exercise/${exercise.id}`);
  };

  return (
    <main>
      <div>
      <h1>All Exercises</h1>
      {
        exercises.map(exercise => (
          <div key={exercise.id}>
            <p>{exercise.name} {exercise.description}</p>
            <img src={exercise.image_url} />
            <button onClick={()=>handleShow(exercise)}>Show Exercise</button>
            <hr />
          </div>
        ))
      }
      </div>
    </main>
  )
}