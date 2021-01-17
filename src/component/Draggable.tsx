import { FunctionComponent, ReactNode } from 'react';
import { BoxWrapper } from './BoxWrapper';
interface DraggableProps {
  name: string;
  children: Array<ReactNode>;
}

export const Draggable: FunctionComponent<DraggableProps> = (props) => {
  const onDrag = (
    action: any,
    setPosition: React.Dispatch<
      React.SetStateAction<{
        top: number;
        left: number;
      }>
    >
  ) => {
    console.log(action);

    if (action.type === 'dragstart') {
      setPosition((prev) => {
        return {
          top: action.clientY,
          left: action.clientX,
        };
      });
    } else {
      setPosition((prev) => {
        return {
          top: action.clientY,
          left: action.clientX,
        };
      });
    }
  };
  return (
    <div className="draggable">
      {props.children.map((item, index) => {
        return (
          <BoxWrapper key={index} onDrag={onDrag}>
            {item}
          </BoxWrapper>
        );
      })}
    </div>
  );
};
