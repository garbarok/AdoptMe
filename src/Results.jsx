import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? ( // if the "pets" array is empty, render a message
        <h1>No Pets Found</h1>
      ) : (
        pets.map(
          (
            pet // otherwise, render a "Pet" component for each pet in the "pets" array
          ) => (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          )
        )
      )}
    </div>
  );
};
export default Results;
