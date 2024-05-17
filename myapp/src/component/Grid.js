import React from "react";

// function Grid() {
//   return <div>Hello Abhay</div>;
// }
const Grid = (props) => {
  console.log(props);
  return (
    <>
      <h1>
        Hello {props.name} And {props.heroName}
      </h1>
      <p>{props.childern}</p>
    </>
  );
};
export default Grid;
