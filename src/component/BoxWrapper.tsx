import { FunctionComponent, ReactNode, useState } from 'react';
interface BoxWrapperProps {
  children: ReactNode;

  onDrag: (
    action: any,
    setPosition: React.Dispatch<
      React.SetStateAction<{
        top: number;
        left: number;
      }>
    >
  ) => void;
}
export const BoxWrapper: FunctionComponent<BoxWrapperProps> = ({
  children,
  onDrag,
}) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  return (
    <div
      className="box"
      onDragStart={(e) => {
        onDrag(e, setPosition);
      }}
      onDrag={(e) => {
        onDrag(e, setPosition);
      }}
      onDragEnd={(e) => {
        onDrag(e, setPosition);
      }}
      style={{ top: position.top, left: position.left }}
    >
      {children}
    </div>
  );
};
