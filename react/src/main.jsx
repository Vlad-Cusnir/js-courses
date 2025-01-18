import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// const titlu = React.createElement(
//   'a', 
//   {href: 'https://google.com'}, 
//   'Prima mea', 
//   React.createElement('strong', null, ' aplicatie'),
//   ' cu react');

// console.log(titlu);

// const titlu = <a href="https://google.com">Prima mea aplicatie cu <strong>JSX</strong>!</a>

// function Titlu() {
//   return <h1>Hello from component</h1>;
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
