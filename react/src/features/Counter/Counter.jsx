import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(10);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <>
      <p><output>{ count }</output></p>
      <p>
        <button>-</button>
        <button onClick={handleIncrement}>+</button>
      </p>
    </>
  );
}

// let state;
// function myUseState(initialState) {
//   if(!state) {
//     state = initialState;
//   }

//   function updateState(newState) {
//     state = newState;
//     Counter();
//   }
//   return [state, updateState]
// }


// return (
//   React.createElement('div', null, 
//     React.createElement('output', null, '0'),
//     React.createElement('p', null, 
//       React.createElement(..)
//     )
//   )
// )
