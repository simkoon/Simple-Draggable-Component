import { FunctionComponent } from 'react';

interface BoxProps {}

export const Box: FunctionComponent<BoxProps> = (props) => {
  return <div className="box"></div>;
};

// export default function Box() {
//   return <div></div>;
// }
