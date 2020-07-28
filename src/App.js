import React from 'react';
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

import './App.css';

// Functional components are also known as dumb components or stateless components
  // They don't do anything except return jsx
  // Written like a normal function:
  //function App() {}
  // or const App = function() {} (ES6: const App = () => {})

// Class components are also known as stateful components
// They manage state
// Written like class App extends React.Component {}
// They render a return of JSX
// So at the bottom of your class component should be
// render() {
  // return (
    // jsx here
  //)
//}

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
