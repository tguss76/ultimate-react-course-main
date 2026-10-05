import { createContext, useContext, useReducer } from "react";

const TravelListContext = createContext();

const initialState = {
  items: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addItem":
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
    case "clearList":
      return { ...state, items: [] };
    default:
      throw new Error("unknown Action");
  }
}

export function TravelListProvider({ children }) {
  const [{ items }, dispatch] = useReducer(reducer, initialState);

  function handleAddItems(item) {
    dispatch({ type: "addItem", payload: item });
    // setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    dispatch({ type: "deleteItem", payload: id });
    // setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    dispatch({ type: "toggleItem", payload: id });
    // setItems((items) =>
    //   items.map((item) =>
    //     item.id === id ? { ...item, packed: !item.packed } : item,
    //   ),
    // );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirmed) dispatch({ type: "clearList" });
  }

  return (
    <TravelListContext.Provider
      value={{
        items,
        handleAddItems,
        handleClearList,
        handleToggleItem,
        handleDeleteItem,
      }}
    >
      {children}
    </TravelListContext.Provider>
  );
}

export function useTravelList() {
  const context = useContext(TravelListContext);
  if (context === undefined)
    throw new Error("usetravelList must be within TravelListProvider");
  return context;
}
