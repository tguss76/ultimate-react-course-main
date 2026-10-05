import { useTravelList } from "../contexts/TravelListContext";

export default function Item({ item }) {
  const { handleToggleItem: onToggleItem, handleDeleteItem: onDeleteItem } =
    useTravelList();
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
