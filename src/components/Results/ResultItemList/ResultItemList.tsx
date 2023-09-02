import { Character } from "../../../models/Character";

interface ResultItemListProps {
  item: Character
  onSelectItem: (item: Character) => void;
}

export const ResultItemList: React.FC<ResultItemListProps> = ({item, onSelectItem}) => {

  return (
    <div
    className="text-sm text-indigo-500 hover:text-red-500 hover:cursor-pointer"
    onClick={() => onSelectItem(item)}>
    {item.name} - {item.species}
  </div>
  );
}