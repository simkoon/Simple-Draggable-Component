import { FunctionComponent, ReactNode } from 'react';
import { BoxWrapper } from './BoxWrapper';
interface DraggableProps {
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
  ) => {
    if (action.type === 'dragstart') {
      setPosition((prev) => {
        setDifference(() => ({
          top: action.clientY - prev.top,
          left: action.clientX - prev.left,
        }));

        return {
          top: prev.top,
          left: prev.left,
        };
      });
    } else if (action.clientY === 0 && action.clientX === 0) {
      setPosition((prev) => {
        return prev;
      });
    } else {
      setPosition((prev) => {
        return {
          top:
            action.view.innerHeight -
              (action.target.scrollHeight - difference.top) >
              action.clientY && difference.top < action.clientY
              ? action.clientY - difference.top
              : action.view.innerHeight -
                  (action.target.scrollHeight - difference.top) >
                action.clientY
              ? 0
              : action.view.innerHeight - action.target.scrollHeight,
          left:
            action.view.innerWidth -
              (action.target.scrollWidth - difference.left) >
              action.clientX && difference.left < action.clientX
              ? action.clientX - difference.left
              : action.view.innerWidth -
                  (action.target.scrollWidth - difference.left) >
                action.clientX
              ? 0
              : action.view.innerWidth - action.target.scrollWidth,
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
