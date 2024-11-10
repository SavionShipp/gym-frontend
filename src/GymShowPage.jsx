import { useLoaderData } from "react-router-dom"
export function GymShowPage() {

  const user = useLoaderData();

  console.log(user);

  return (
    <div>
      <h1>Name:{user.name}</h1> 
      <hr />
      <p>Email:{user.email}</p>
      <hr />
      <img src={user.image_url} />
      </div>
  );
}