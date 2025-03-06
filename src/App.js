import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <>
      <h1>🌴 Far away 🧳</h1>
    </>
  );
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  const newItem = { description, quantity, packed: false, id: Date() };
  console.log(newItem);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 Trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          //console.log(e.target.value);
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  // Corrected name
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button>❌</button>
      </li>
    </>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>👜 You have x items on your list and you already packed x (x%)</em>
    </footer>
  );
}

/* The technique of controlled elements basically consists of three steps.Define a piece of state(description)
then we use that piece of state on the element that we want to cotrol so we basically force the element to always take
the value of this state variiable and finally we need to update the onchange handler where we need to set the
description to the current value of that input field.With this react is the incharge of the state and basically 
the whole element thats the reason why this technique is called control elements
 */
