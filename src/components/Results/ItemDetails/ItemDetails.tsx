import { Character } from "../../../models/Character";

interface ItemDetailsProps {
  item: Character,
}

export const ItemDetails: React.FC<ItemDetailsProps> = ({item}) => {
  
  return (
    <div className="flex items-center text-violet-600">
    <div>
      <img src={item.image} width={200} height={200} alt="characterimage" className="rounded-full mr-8" />
    </div>
    <div>
      <p>Id: {item.id}</p>
      <p>Gender: {item.gender}</p>
      <p>Location: {item.location?.name}</p>
      <p>Species: {item.species}</p>
      <p>Status: {item.status}</p>
      <p>Type: {item.type}</p>
    </div>
  </div>
  );
}