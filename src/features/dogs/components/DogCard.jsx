function DogCard({ dog }) {
  return (
    <li className="dog-card">
      <strong>{dog.name}</strong>
      <p>Breed: {dog.breed}</p>
    </li>
  );
}
export default DogCard;