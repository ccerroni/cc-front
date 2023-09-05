import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useDetails } from "../../hooks/useDetails";
import { Character } from "../../models/Character";
import { ResultItemList } from "./ResultItemList/ResultItemList";
import { ItemDetails } from "./ItemDetails/ItemDetails";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

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
      <h1>Results page</h1>
      <p className="m-4">It is lazy ;)</p>

      <Row>
        <Col>
          {error && (<p>ERROR</p>)}
          {!isLoading && !error && response?.results && response.results.map((character) => (
            <ResultItemList key={character.id} item={character} onSelectItem={handleSelectCharacter} />
          ))
          }</Col>
        <Col>
          {isOpen && selectedCharacter && (
            <CharacterDetails title={selectedCharacter.name}>
              <ItemDetails item={selectedCharacter} />
            </CharacterDetails>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default Results;