import { useReducer } from "react";

function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    }
  );
  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>first:{state.first}</div>
      <div>last:{state.last}</div>
    </div>
  );
}

// Define state type
type State = {
  name: string;
  names: string[];
};

// Define action types
type Action = { type: "SET_NAME"; payload: string } | { type: "ADD_NAME" };

// Reducer function with types
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "ADD_NAME":
      return { ...state, names: [...state.names, state.name] };
    default:
      return state;
  }
};

// Initial state
const initialState: State = {
  name: "",
  names: [],
};

const NameList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div>
        {state.names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>

      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />

      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
    </div>
  );
};
function App() {
  return (
    <div>
      <NameList />
      <UserForm />
    </div>
  );
}
export default App;
