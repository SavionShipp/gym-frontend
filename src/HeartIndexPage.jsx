import { useLoaderData, useNavigate } from "react-router-dom";
export function HeartIndexPage() {


  const navigate = useNavigate();
  const hearts = useLoaderData();

  const handleNavigate = () => {
    navigate(`/routines`);

  }


    
  return (
    <main>
      <div className="text-white bg-gray-900 min-h-screen py-8">
        <h1 className="pt-5 flex justify-center text-3xl">All Exercises</h1>
        {hearts.map((heart) => (
          <div key={heart.id}>
            <div onClick={handleNavigate}>
            <img src={heart.user.image_url} alt="profile image" className="w-16 h-16 rounded-full border-2 border-gray-300 m-2"/>
            </div>
            <img src={heart.exercise.image_url} alt="exercise image" className="mx-auto w-3/4 h-96 object-cover rounded-md mb-4"/>
            <a href={heart.exercise.video_url} className="cursor-pointer text-xl p-6">video link</a>
            <div onClick={handleNavigate} id="index-name">
            <h4 className="text-2xl font-bold">Name: {heart.user.name}</h4>
            </div>
            <h5 className="text-2xl font-bold">Workout: {heart.exercise.name}</h5>
            <p className="text-xl">Description: {heart.exercise.description}</p>
            <p>{heart.sets}</p>
            <p>{heart.reps}</p>
          </div>
        ))}
      </div>
    </main>
  );
  
}