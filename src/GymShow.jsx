import { useLoaderData } from "react-router-dom"
export function GymShow() {

  const user = useLoaderData()[0];

  console.log(user);

  return (
    <div>
      <h1>{user.name} {user.email}</h1>
      <hr />
      <img src={user.image_url} />
      </div>
  );
}