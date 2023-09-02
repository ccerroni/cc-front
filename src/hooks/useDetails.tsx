import { useState } from "react"
import { CardContainer } from "../components/CardContainer/CardContainer";
import { CARD_TITLE_DEFAULT } from "../constants/constants";

export const useDetails = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  interface CharacterDetailsProps {
    title?: string;
    children: React.ReactElement
  }

  const CharacterDetails: React.FC<CharacterDetailsProps> = ({ title = CARD_TITLE_DEFAULT, children }) => {
    if (!isOpen) return null;
    return (
      <CardContainer isOpen={isOpen} title={title} onCloseInfo={closeModal}>
        {children}
      </CardContainer>
    );
  }

  return {
    openModal,
    closeModal,
    CharacterDetails,
    isOpen
  }

}