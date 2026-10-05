import { useTravelList } from "../contexts/TravelListContext";

function Item({ item }) {
  const { handleDeleteItem: onDeleteItem, handleToggle: onToggelItem } = useTravelList();
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggelItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
