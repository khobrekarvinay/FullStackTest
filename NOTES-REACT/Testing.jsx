
//////// What is Testing in React? /////////////////////

// Testing ensures your application works as expected and prevents bugs when you add new features.
// In the React ecosystem, the standard tools are:
// 1. Jest: A JavaScript test runner (finds tests, runs them, asserts results).
// 2. React Testing Library (RTL): Helps render components and interact with them like a user would (clicks, typing).

// Note: If you use Create React App (CRA) or Vite, these tools are usually pre-installed.
// Test files usually end in .test.js, .test.jsx, .spec.js, or .spec.jsx.


//////// Types of Tests /////////////////////

// 1. Unit Tests: Testing individual units of code in isolation (e.g., a single function or a simple button component).
// 2. Integration Tests: Testing how multiple units work together (e.g., a form submitting data, or a parent component interacting with a child).
// 3. End-to-End (E2E) Tests: Testing the full flow from the user's perspective (e.g., Cypress, Playwright). 


import { render, screen, fireEvent } from '@testing-library/react';
// We also import the component we want to test.
// import Button from './Button'; 


//////// 1. Basic Unit Test Example /////////////////////

// Let's say we have a simple component: Button.js
/*
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
*/

// 'test' (or 'it') defines a single test case.
test('renders button with correct label', () => {
  // 1. Render the component into the virtual DOM
  render(<Button label="Click Me" />);

  // 2. Find the element (like a user looking for it)
  // screen.getByText throws an error if the text is not found.
  // /click me/i is a regex for case-insensitive match.
  const buttonElement = screen.getByText(/click me/i); 

  // 3. Assert (Check if it meets expectations)
  expect(buttonElement).toBeInTheDocument();
});


//////// 2. Interaction & State (Integration Test) /////////////////////

// Integration tests often check if the UI updates correctly when a user interacts with it.
// Example: A Counter component.

/*
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
*/

test('increments counter when button is clicked', () => {
  render(<Counter />);

  // Check initial state
  const counterText = screen.getByText(/Count: 0/i);
  expect(counterText).toBeInTheDocument();

  // Find the button
  const button = screen.getByText(/Increment/i);

  // Simulate a click event
  fireEvent.click(button);

  // Check if UI updated
  const updatedCounterText = screen.getByText(/Count: 1/i);
  expect(updatedCounterText).toBeInTheDocument();
});


//////// Key Concepts: Queries /////////////////////

// The `screen` object provides methods to query the rendered DOM.

// 1. getBy... (e.g., getByText, getByRole)
//    - Returns the element.
//    - Throws an error if NOT found.
//    - Use when you expect the element to be there.

// 2. queryBy... (e.g., queryByText)
//    - Returns the element or null.
//    - Does NOT throw an error.
//    - Use when you want to check that an element is NOT there (e.g., a modal is closed).

// 3. findBy... (e.g., findByText)
//    - Returns a Promise.
//    - Waits (up to 1000ms default) for the element to appear.
//    - Use for async updates (like data fetching).


//////// 3. Async Testing (Mocking API) /////////////////////

// When testing components that fetch data (useEffect), we don't want to hit the real API.
// We "Mock" the fetch function.

test('renders user data after loading', async () => {
  // Mocking fetch to return fake data
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ name: 'John Doe' }]),
    })
  );

  render(<UserList />);

  // Initially it might show "Loading..."
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  // We use `findBy` to wait for the element to appear after the "fetch" completes
  const userElement = await screen.findByText(/John Doe/i);
  
  expect(userElement).toBeInTheDocument();
});


//////// 4. How to Run Tests /////////////////////

// 1. File Naming:
//    Jest automatically looks for files ending in .test.js, .test.jsx, .spec.js, or files inside a __tests__ folder.
//    Common practice: Place Button.test.js right next to Button.js.

// 2. Running the Command:
//    In your terminal, run:
//    > npm test
//    (This script is usually set up in package.json by Create React App or Vite).

// 3. Watch Mode:
//    By default, `npm test` runs in "watch mode". It detects changes in your files and only runs tests
//    related to changed files. This makes development fast!
//    - Press 'a' to run all tests.
//    - Press 'q' to quit.


//////// 5. When to Write Tests? (Workflow) /////////////////////

// Approach A: Test-Driven Development (TDD)
// 1. Write the test FIRST (it fails because the component doesn't exist yet).
// 2. Write the code to make the test pass.
// 3. Refactor.
// -> Ensures high code quality but takes practice.

// Approach B: Test After Code
// 1. Build the component.
// 2. Write tests to verify it works and cover edge cases.
// -> Most common for beginners.

// Best Practice:
// Run tests before pushing code to GitHub. In professional teams, a CI/CD pipeline runs these tests automatically when you push code to ensure nothing breaks.