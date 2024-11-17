import { useLoaderData } from "react-router-dom";


export function GymShowPage() {
  const routines = useLoaderData();



  console.log(routines);

  return (
    <div className="text-white bg-gray-900 min-h-screen py-8">
      {routines.map((routine) =>(
        <div key={routine.id}>
          <img src={routine.user.image_url} alt="profile image" className="w-16 h-16 rounded-full border-2 border-gray-300 m-2"/>
          <h1 className="text-2xl font-bold">Name:{routine.user.name}</h1>
          <h1 className="text-2xl font-bold">Email:{routine.user.email}</h1>
          <h1 className="pt-5 flex justify-center text-3xl">Exercises</h1>
          <h1 className="text-xl">Workout:{routine.exercise.name}</h1>
          <h1 className="text-xl">description:{routine.exercise.description}</h1>
          <a href={routine.exercise.video_url} className="cursor-pointer text-xl p-6">video link</a>
          <img src={routine.exercise.image_url} className=" mx-auto w-3/4 h-96 object-cover rounded-md mb-4"/>
        </div>
      ))}

    </div> 
  );
  



}
