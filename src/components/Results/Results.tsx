import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useDetails } from "../../hooks/useDetails";
import { Character } from "../../models/Character";
import { ResultItemList } from "./ResultItemList/ResultItemList";
import { ItemDetails } from "./ItemDetails/ItemDetails";

const Results: React.FC = () => {
  const { isLoading, error, response } = useFetch();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const { isOpen, openModal, CharacterDetails } = useDetails();

  const handleSelectCharacter = (character: Character) => {
    openModal();
    setSelectedCharacter(character);
  }

  return (
    <div>
      <h1 className="text-3xl m-4">Results page</h1>
      <p className="text-grey-500 m-4">It is lazy ;)</p>

      <div className="flex flex-row mt-8">
        <div className="basis-2/4 ml-4">
          {error && (<p>ERROR</p>)}
          {!isLoading && !error && response?.results && response.results.map((character) => (
            <ResultItemList key={character.id} item={character} onSelectItem={handleSelectCharacter}/>
          ))
          }
        </div>
        {isOpen && selectedCharacter && (
          <div className="basis-2/4 mt-4 mr-4">
            <CharacterDetails title={selectedCharacter.name}>
              <ItemDetails item={selectedCharacter}/>
            </CharacterDetails>
          </div>
        )}
      </div>
    </div>
  )
}

export default Results;