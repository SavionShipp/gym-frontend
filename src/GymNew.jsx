export function GymNew({onCreate}) {

  const handleSubmit = (event) => {
         event.preventDefault();
         const params = new FormData(event.target);
         onCreate(params, () => event.target.reset());
       };

  return (
    <div>
      <h1>New Exercise</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          description: <input name="desrciption" type="textbox" />
        </div>
        <div>
          image: <input name="image" type="text" />
        </div>
        <div>
          video: <input name="video" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}