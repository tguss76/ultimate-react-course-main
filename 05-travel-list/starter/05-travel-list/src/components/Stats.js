import { useTravelList } from "../contexts/TravelListContext";

function Stats() {
  const { items } = useTravelList();
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items</em>
      </p>
    );
  const newNum = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / newNum) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go"
          : `You have ${newNum} items on your list, and you already packed ${numPacked} 
        (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
