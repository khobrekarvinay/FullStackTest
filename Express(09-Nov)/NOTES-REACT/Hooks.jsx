

//////// 1. UseState Hook ///////// ----------------------------------


// The useState hook is a React hook that allows you to add state management to functional components. Before hooks, state could only be used in class components, 
// but useState makes it easier and more concise to manage state in functional components.


const [state, setState] = useState(initialValue);

// state: The current state value
// setState: A function to update the state value 
// initialValue: To pass a initial value to the state. 

// The useState() hook can conveniently hold strings, arrays, numbers, objects and much more.
// When you call this setState function it triggers a re-render of the component with the new state value.

// import { UseState } from 'react'; 


///// 2. UseReducer Hook /////////// -----------------------------------

// The useReducer hook is an alternative to useState for managing more complex state logic. It is esp. useful when 
// you want to handle multiple state changes in one centralized function. 

const [state1, dispatch] = useReducer(reducer, initialState);

// reducer: A function that has different actions that define how the state changes.
// initialState: Starting state of your component. 
// dispatch: A function to send actions to the reducer. 


import React, { useReducer } from 'react';

const initialState = { count: 0 };

// Reducer function contains the actions that actually change the state. 
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
    // Dispatch sends actions to reducer. 
  );
}

export default Counter;

// For even more complex state handling let's say we need one same state on multiple pages we use Redux. Redux is explained in new file.
// Eg: When say movie website has search feature which works on any page whether it be Upcoming or Top rated - Redux is needed.



///// 3. UseEffect Hook ///////// ------------------------------------

// The useEffect hook is used in React to run side code/effects in your component. Side effects include things like:

// 1. Fetching Data: Getting data from an API.
// 2. Updating the DOM: Changing the page title or managing timers.
// 3. Setting up Subscriptions: For example, listening to events. 

// useEffect runs code right after the component renders. Mostly used for fetching data directly after page load. Example you login into
// a Clothing app the app automatically loads all the clothes and offers, that's only possible thorugh useEffect. 

// Syntax: useEffect((func) => {something}, [dependencyArray])

//Function is sent as parameter cause it gives React more control on cleanup & execution. 
//The function is executed only after the render cycle is completed that is what actually needed. 
//Plus becoz it's a func React knows how to cleanup sideEffects like timers, event listeners, etc instead of causing memory leaks.

// If dependency array is skipped, useEffect runs after every render
// If empty array is provided, useEffect runs only once, after the first render.
// IF variable is provided, useEffect runs only when those variables change. 
// Basic Example fetching movie data.

import React, { useState, useEffect } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []); // The empty array means this runs only once, after the first render.

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}

// Let's say you have a seach box in your website that should change the displayed products directly as the text inside it changes
// you need to pass the searchquery to the dependency array. so for every new letter typed useEffect runs the fetch method again.

useEffect(() => {
  fetch(`https://api.example.com/movies?search=${searchQuery}`)
    .then(response => response.json())
    .then(data => setMovies(data));
}, [searchQuery]); // Re-runs whenever 'searchQuery' changes


// UseEffect is also used for setting up timers & intervals. 
// The working behind all other uses is the same. Some function that needs to run right after render. 




////// 4. UseContext Hook ///// --------------------------------

// Think of Context as a way to store data globally (like a global variable) that can be shared with any component in the app.
// The useContext hook lets you get or use that data easily in any component. 

// It's used to avoid 'prop drilling' (passing props through multiple levels of components)
// Used to share global data, like :
// -User authentication info
// -Theme (light/dark)
// -Any smaller component with state that is used on multiple larger components, like navbar, footer. 

// 1. Creating a context :

import React, { createContext, useState } from 'react';

// Create the Context
const ThemeContext = createContext();

// 2. Provide the Context Value :
// Wrap the part of your app where you want to share the context data. If you want the data for all components, put everything
// inside the common wrap. 

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component1 />
      <Component2 />
    </ThemeContext.Provider>
  );
}

// You can either declare the global variables in App.js or create a separate Provider function having the global variables in it, 
// and then wrap that in your App.js 

// Here's a provider file example: 

import React, { createContext, useState } from 'react';

// Create Context
const ThemeContext1 = createContext();

// Create Provider with state logic
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext1.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext1.Provider>
  );
};

// Export both
export { ThemeContext, ThemeProvider }; // Exporting Themecontext to make more global variables in other files. 
// Exporting ThemeProvider to be Wrapped to components in App.js

// Redux combines global state with all the actions and their reducers to greatly simplify code. 
// In the main component files all you need to write is the dispatch function needed for the component. 
// Maintaining state for complex apps like e-commerce globally more simpler than useContext.
// Also provides tools like Redux Thunk or Saga for async actions. Easier and Faster to scale. 















































