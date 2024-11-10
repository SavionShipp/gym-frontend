export function GymIndex({ exercises }) {
  return (
    <div>
      <h1>All Exercises</h1>
      {exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <h2>{exercise.description}</h2>
          <img src={exercise.image_url} />
          <a href={exercise.video_url} />
          </div>
      ))}
    </div>
  );
}