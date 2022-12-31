// Declares an async function called `fetchSearch` that takes an object with a single property `queryKey` as its argument
async function fetchSearch({ queryKey }) {
  // Destructures the object `queryKey` and assigns the values of the properties `animal`, `location`, and `breed` to variables with the same name
  const { animal, location, breed } = queryKey[1];
  // Makes a GET request to the specified URL with the query parameters `animal`, `location`, and `breed` set to the corresponding variables
  const res = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  // If the HTTP response status of the request is not "okay" (not in the 200-299 range), throws an error with a message that includes the variables `animal`, `location`, and `breed`
  if (!res.ok)
    throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);

  // Returns the parsed JSON body of the response
  return res.json();
}

// Exports the `fetchSearch` function as the default export
export default fetchSearch;
