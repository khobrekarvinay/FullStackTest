

//// What is Lazy Loading? -----------------------------------

// Lazy loading is a performance optimization technique 🚀. It means splitting your code and only loading a component's code
// from the server when it is actually needed (e.g., when it's about to be rendered).
// This reduces the initial JavaScript bundle size, leading to a much faster initial app load time ⚡.

// How is it done?
// You use two main things from React:
//React.lazy(): A function that lets you render a dynamic import() as a regular component.
// <Suspense>: A component that lets you specify a "loading" indicator (fallback UI) while the lazy component's code is being loaded.


// Eg: Here’s how you would lazy-load an AboutPage component.
import React, { Suspense, lazy } from 'react';

// 😴 Instead of a direct import like this:
// import AboutPage from './AboutPage';

// We use React.lazy() with a dynamic import()
const AboutPage = lazy(() => import('./AboutPage'));

function App() {
  return (
    <div>
      <h1>My Awesome App</h1>
      <nav>Links go here...</nav>

      {/*
        The <Suspense> component wraps our lazy component.
        The `fallback` prop accepts any React element you want
        to render while waiting for the component to load.
      */}
      <Suspense fallback={<div>Loading page... ⏳</div>}>
        {/* React will only load the AboutPage component when it tries to render it here */}
        <AboutPage />
      </Suspense>
    </div>
  );
}

export default App;

// In this example, the code for AboutPage.js is not included in the initial JavaScript file. 
// The browser only requests it when the <App /> component tries to render <AboutPage />.