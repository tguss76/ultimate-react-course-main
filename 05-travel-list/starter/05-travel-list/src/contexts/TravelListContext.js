import { createContext, useContext, useReducer } from "react";

const TravelListContext = createContext();

const initialState = {
  items: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addItems":
      return { ...state, items: [...state.items, action.payload] };
    case "deleteItem":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "toggleItem":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, packed: !item.packed } : item,
        ),
      };
    case "clearItems":
      return { ...state, items: [] };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export function TravelListProvider({ children }) {
  const [{ items }, dispatch] = useReducer(reducer, initialState);

  function handleAddItems(item) {
    dispatch({ type: "addItems", payload: item });
  }

  function handleDeleteItem(id) {
    dispatch({ type: "deleteItem", payload: id });
  }

  function handleToggle(id) {
    dispatch({ type: "toggleItem", payload: id });
  }

  function handleDeletAll() {
    const confirm = window.confirm("Are you sure");
    if (confirm) dispatch({ type: "clearItems" });
  }

  return (
    <TravelListContext.Provider
      value={{
        items,
        handleAddItems,
        handleDeleteItem,
        handleToggle,
        handleDeletAll,
      }}
    >
      {children}
    </TravelListContext.Provider>
  );
}

export function useTravelList() {
  const context = useContext(TravelListContext);
  if (context === undefined)
    throw new Error("useTravelList must be used within TravelListProvider");
  return context;
}
