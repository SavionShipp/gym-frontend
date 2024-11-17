import { useLoaderData, useNavigate } from "react-router-dom";
export function GymIndexPage() {


  const navigate = useNavigate();
  const routines = useLoaderData();

  const handleNavigate = () => {
    navigate(`/routines`);

  }

  const handleHearted = () => {

  }

    
  return (
    <main className="bg-gray-900 min-h-screen py-8 text-white">
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-3xl font-bold text-center text-white m-2">All Exercises</h1>
          {routines.map((routine) => (
          <div key={routine.id} className="bg-gray-600 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 m-6">
            <div onClick={handleNavigate} className="cursor-pointer">
            <img src={routine.user.image_url} alt="profile image" className="w-16 h-16 rounded-full border-2 border-gray-300 m-2"/>
            </div>
            <img src={routine.exercise.image_url} alt="exercise image" className=" mx-auto w-3/4 h-96 object-cover rounded-md mb-4"/>
            <div onClick={handleNavigate}  className="cursor-pointer">
            <h4 className="text-3xl font-bold">Name: {routine.user.name}</h4>
            </div>
            <a href={routine.exercise.video_url} className="cursor-pointer text-xl">video link</a>
            <h5 className="text-xl">Workout: {routine.exercise.name}</h5>
            <p className="text-lg">Description: {routine.exercise.description}</p>
            <p className="text-lg">{routine.sets}</p>
            <p className="text-lg">{routine.reps}</p>
            <button onClick={handleHearted} className="bg-white text-black text-2xl rounded-3xl border p-2">Like</button>
          </div>
        ))}
      </div>
    </main>
  );
  
}