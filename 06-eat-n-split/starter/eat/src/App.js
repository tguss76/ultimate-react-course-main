import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFreiend, setShowAddFreiend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFreiend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFreiend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFreiend(false);
  }

  function handleSplitBill(value) {
    console.log(value);
    setFriends(
      (friends) =>
        friends.map((friend) =>
          friend.id === selectedFriend.id
            ? { ...friend, balance: friend.balance + value }
            : friend,
        ),
      setSelectedFriend(null),
    );
  }
  return (
    <div className="app">
      <div className="sidebar">
        <List
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFreiend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFreiend ? "close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

function List({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((firend) => (
        <Friend
          friend={firend}
          key={friends.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {" "}
          {friend.name} owe you ${friend.balance}
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          you and {friend.name} are even ${friend.balance}
        </p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {" "}
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const newFriend = {
      name,
      image: `${image}?${id}`,
      balance: 0,
      id,
    };

    onAddFriend(newFriend);

    setImage("https://i.pravatar.cc/48");
    setName("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paideByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paideByUser : "";
  const [whoIsPaying, setWhoIsPaing] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paideByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paideByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name} </h2>

      <label>😊 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>

      <label>❤️Your expense</label>
      <input
        type="text"
        value={paideByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill
              ? paideByUser
              : Number(e.target.value),
          )
        }
      ></input>

      <label>😁 {selectedFriend.name} exspens</label>
      <input type="text" disabled value={paidByFriend}></input>

      <label>Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaing(e.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
