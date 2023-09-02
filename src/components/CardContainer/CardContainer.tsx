
interface CardInfoProps {
  title: string;
  isOpen: boolean;
  children: React.ReactElement;
  onCloseInfo: () => void;
}

export const CardContainer: React.FC<CardInfoProps> = ({title, isOpen, onCloseInfo, children }) => {
  if (!isOpen) return null;
  return (
    <div className="p-6 border-solid border-2 border-violet-600 rounded-xl">
      <div className="flex justify-between mb-4 text-violet-600">
        <p className="text-2xl">{title}</p>
        <button onClick={onCloseInfo} className="text-xl">X</button>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}