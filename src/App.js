import React, { useState } from "react";
import Todolist from "./Todolist";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  function AddItems(inputText) {
    setItems((PrevItem) => {
      return [...PrevItem, inputText];
    });

  }
  function DeleteItem(id) {
    setItems(PrevValues => {
      return items.filter((value, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea
        AddItems={AddItems}
      />

      <div>
        <ul>
          {items.map((toDoItems, index) => {
            return <Todolist
              text={toDoItems}
              key={index}
              id={index}
              onClicked={DeleteItem}
            />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
