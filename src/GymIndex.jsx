import { useLoaderData, useNavigate } from 
"react-router-dom";

export function GymIndex() {

  const exercises = useLoaderData();
  const navigate = useNavigate();

  const handleShow = user => {
    console.log("SHOW");
    navigate(`/user/${user.id}`);
  };

  console.log(exercises);
  return (
    <div>
      <h1>All Exercises</h1>
      {exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <h2>{exercise.description}</h2>
          <img src={exercise.image_url} />
          <a href={exercise.video_url} />
          <button onClick={() =>handleShow(exercise)}>{exercise.name}</button>
          </div>
      ))}
    </div>
  );
}