import AppName from "./Components/AppName";
import AddTodoitem from "./Components/AddTodoitem";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import Welcome from "./Components/Welcome";
import { useReducer } from "react";
import { TodoItemsContext } from "./Store/todo-items-store";

const reducer = (currstate, action) => {
  let todoItems = currstate;
  if (action.type === "NEW_ITEM") {
    todoItems = [
      ...currstate,
      { name: action.payload.itemName, Duedate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    todoItems = todoItems.filter(
      (item) => item.name !== action.payload.todoitemName
    );
  }
  return todoItems;
};

function App() {
  const [todoItems, dispatchMethod] = useReducer(reducer, []);

  const handleAddButton = (itemName, itemDueDate) => {
    console.log(itemName, itemDueDate);
    const addactionobj = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchMethod(addactionobj);
  };

  const handleOnButtonDelete = (todoitemName) => {
    const deleteactionobj = {
      type: "DELETE_ITEM",
      payload: {
        todoitemName,
      },
    };
    dispatchMethod(deleteactionobj);
  };

  return (
    <TodoItemsContext.Provider
      value={{ todoItems, handleAddButton, handleOnButtonDelete }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTodoitem></AddTodoitem>
        <Welcome></Welcome>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
