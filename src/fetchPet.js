// Defines a function called "fetchPet" that takes an object with a "queryKey" property as its argument
// The function is declared as async, meaning it will return a promise that resolves to the return value of the function
const fetchPet = async ({ queryKey }) => {
  // Extracts the pet's ID from the "queryKey" array
  const id = queryKey[1];

  // Makes a network request to the pets-v2.dev-apis.com API to fetch the pet's details
  // The `fetch` function returns a promise that resolves to the HTTP response from the server
  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  // If the request was not successful (HTTP response status is not in the 200-299 range), throws an error
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  // Otherwise, returns the parsed JSON body of the HTTP response
  return apiRes.json();
};

// Exports the "fetchPet" function as the default export
export default fetchPet;
