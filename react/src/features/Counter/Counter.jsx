import { useState } from 'react';
import clsx from 'clsx';

import styles from './Counter.module.css';
// function add({a = 0, b = 0}) {
//   return a + b;
// }
// const obj = {a: 2, b: 3}
// console.log(add(obj));

// const numeProp = 'prop';

// const o = {
//   [numeProp]: 'Paul'
// };

// console.log(o.prop);

export function Counter({ initialCount = 0, diff = 1 }) {
  const [count, setCount] = useState(initialCount);

  function handleClick(diff) {
    setCount(count + diff);
  }

  function handleReset() {
    setCount(initialCount);
  }

  return (
    <>
      <p>
        <output
          className={clsx({
            [styles.positive]: count > 0,
            [styles.negative]: count < 0,
          })}
        >
          {count}
        </output>
      </p>
      <p>
        <button onClick={() => handleClick(-diff)}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => handleClick(diff)}>+</button>
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
