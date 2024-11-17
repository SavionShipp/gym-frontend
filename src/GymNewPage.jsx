import axios from 'axios';
import { GymNew } from "./GymNew";


export function GymNewPage() {

const handleCreate = (exercise,params, successCallback) => {
  console.log("handleCreate", params);
  axios.post(`http://localhost:3000/exercise.json`, params)
    .then((response) => {
      console.log(response.data); 
      successCallback();
    })
    .catch((error) => {
      console.error("Error creating exercise:", error); 
    });
};

return (
  <GymNew onCreate={handleCreate} />
);
}

