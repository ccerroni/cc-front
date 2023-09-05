import { Character } from "../../../models/Character";
import './ResultItemList.css';
interface ResultItemListProps {
  item: Character
  onSelectItem: (item: Character) => void;
}

export const ResultItemList: React.FC<ResultItemListProps> = ({ item, onSelectItem }) => {

  return (
    <div className="list-item" onClick={() => onSelectItem(item)}>
      {item.name} - {item.species}
    </div>
  );
}