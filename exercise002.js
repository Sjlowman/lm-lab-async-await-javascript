import fetch from "node-fetch";
/* Function to convert
const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

fetchData(jsonTypicode);
*/

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchData(apiEndPoint) {
  try {
    const response = await fetch(apiEndPoint);
    const returnObj = await response.json();
    console.log(returnObj);
  } catch (error) {
    console.log(error);
  }
}

fetchData(jsonTypicode);
