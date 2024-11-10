import { useState } from 'react';
import axios from 'axios';

export default function PhotoForm() {
  const [user, setUser] = useState([]);
  const handleUpdate = (id, params, successCallback) => {
    console.log('handleUpdate', params);
    axios.patch(`http://localhost:3000/user/${id}.json`, params).then((response) => {
      setUser(
        user.map((user) => (user.id === response.data.id ? response.data : user))
      );
      successCallback();
      handleClose();
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleUpdate(user.id, params, () => event.target.reset());
  };

  const handleClose = () => {
    console.log('Form closed');
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={user.name} name="name" type="text" />
        </div>
        <div>
          email: <input defaultValue={user.email} name="url" type="text" />
        </div>
        <div>
          image: <input defaultValue={user.image_url} name="width" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
