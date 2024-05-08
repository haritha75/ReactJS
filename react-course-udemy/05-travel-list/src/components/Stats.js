export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  // use of derived state to calculate the number of items and the number of packed items already existing state or props values without using setter methods
  // if you use setters method every itme adding item we can rendering the state two ore more times it takes time right then instead of state
  // we can use derived state it calculate the data rather thatn directly setting the data
  const numItems = items.length; //derivved state
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
