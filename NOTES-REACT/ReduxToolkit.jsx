
//////// What is Redux Toolkit (RTK)? /////////////////////

// Redux is a state management library for JavaScript apps. 
// "Redux Toolkit" is the official, recommended way to write Redux logic today. 
// It simplifies the setup and removes a lot of the "boilerplate" code that older Redux required.

// Why use it over useContext?
// 1. Performance: Context re-renders ALL consumers when value changes. Redux only re-renders components that select the specific piece of data that changed.
// 2. DevTools: You can time-travel (undo/redo actions) and inspect every state change.
// 3. Structure: Enforces a specific way to write code, making it easier for teams.


//////// Key Concepts /////////////////////

// 1. Store: The single source of truth. A giant object holding the state of your entire app.
// 2. Slice: A collection of logic for a specific feature (e.g., userSlice, cartSlice). It contains the initial state and the functions (reducers) to change it.
// 3. Actions: Events that describe "what happened" (e.g., "addToCart"). RTK creates these automatically for you.
// 4. Dispatch: The only way to update state is to "dispatch" an action.
// 5. Selector: A function to extract specific data from the store.


//////// 1. Creating a Slice /////////////////////

import { createSlice, configureStore } from '@reduxjs/toolkit';

// A slice for a Counter feature
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    // These are functions to change state.
    // RTK allows us to write "mutating" logic (state.value += 1) because it uses a library called Immer under the hood.
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions so components can use them
export const { increment, decrement, incrementByAmount } = counterSlice.actions;


//////// 2. Configuring the Store /////////////////////

// We combine all slices into the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    // user: userSlice.reducer, // if we had more
  },
});


//////// 3. Providing the Store /////////////////////

// In your main index.js or App.js, wrap the app with Provider
/*
import { Provider } from 'react-redux';

<Provider store={store}>
  <App />
</Provider>
*/


//////// 4. Using Redux in Components /////////////////////

import { useSelector, useDispatch } from 'react-redux';

function CounterComponent() {
  // useSelector: Read data from the store
  // This component will only re-render if state.counter.value changes.
  const count = useSelector((state) => state.counter.value);

  // useDispatch: Get the function to send actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}


/// TL:DR
// useSelector to access redux state anywhere
// useDispatch to access redux actions and use them anywhere
// Reducer takes state & action object as argument, returns the next state

// createSlice & useReducer do the same thing but the Slice in redux,
// dramatically reduces syntax by keeping state, reducers, and action creators into one definition


//////// 5. Async Operations (createAsyncThunk) /////////////////////

// In real apps, we need to fetch data from APIs. We use "Thunks" for this.
// createAsyncThunk generates three actions automatically: pending, fulfilled, and rejected.

import { createAsyncThunk } from '@reduxjs/toolkit';

// 1. Create the Thunk
export const fetchUser = createAsyncThunk('user/fetchUser', async (userId) => {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  return response.json();
});

// 2. Handle it in createSlice using extraReducers
const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {}, // standard reducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


//////// 6. Normal Async/Await vs createAsyncThunk /////////////////////

// Q. Did syntax get simpler? What changed?

// 1. Normal Async/Await (Local State)
// - You must manually manage 3 states: loading, error, data.
// - Requires repetitive try/catch blocks in every component that fetches data.
/*
  // Inside Component
  const [isLoading, setIsLoading] = useState(false);
  
  async function fetchData() {
    setIsLoading(true);
    try {
       const res = await api.get('/users');
       setData(res.data);
    } catch(err) {
       setError(err);
    }
    setIsLoading(false);
  }
*/

// 2. createAsyncThunk (Global State)
// - The fetching logic moves out of the component.
// - Redux Toolkit AUTOMATICALLY generates the 3 lifecycle actions for you:
//   1. pending (loading)
//   2. fulfilled (success)
//   3. rejected (error)
// - You just listen to them in `extraReducers`.

// What Changed?
// - Component Code: Becomes much cleaner (just `dispatch(fetchData())`).
// - Standardization: Every API call follows the exact same pattern (pending/fulfilled/rejected).
// - No more manual `setIsLoading(true)` or `setIsLoading(false)` scattered everywhere.
