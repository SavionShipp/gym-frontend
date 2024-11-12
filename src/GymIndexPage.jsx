import { useLoaderData, useNavigate } from "react-router-dom";
import axios from 'axios';
export function GymIndexPage() {

  const exercises = useLoaderData();
  const navigate = useNavigate();
  const user = useLoaderData();

  console.log(exercises);

  const handleShow = (user) => {
    console.log("SHOW");
    navigate(`/user/${user.id}`);
  };

  const handleLike = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/liked.json", params).then(response => {
      console.log(response.data);
      navigate("/liked");
    }); 
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
            <button onClick={()=>handleShow(user)}>Show Exercise</button>
            <button onClick={()=>handleLike(event)}>like</button>
            <hr />
          </div>
        ))
      }
      </div>
    </main>
  )
}