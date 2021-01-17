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
    >,
    difference: {
      top: number;
      left: number;
    },
    setDifference: React.Dispatch<
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
  const [difference, setDifference] = useState({ top: 0, left: 0 });
  const [position, setPosition] = useState({ top: 0, left: 0 });
  return (
    <div
      className="box-wrapper"
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setDragImage(e.currentTarget, -30000, -30000);
        onDrag(e, setPosition, difference, setDifference);
      }}
      onDrag={(e) => {
        onDrag(e, setPosition, difference, setDifference);
      }}
      onDragEnd={(e) => {
        onDrag(e, setPosition, difference, setDifference);
      }}
      style={{ top: position.top, left: position.left }}
    >
      {children}
    </div>
  );
};
