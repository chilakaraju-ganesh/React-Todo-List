import { useContext, useRef, useState } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "../Store/todo-items-store";

function AddTodoitem() {
  const { handleAddButton } = useContext(TodoItemsContext);

  const enterTaskElement = useRef();
  const enterDateElement = useRef();

  const onAddButtonClick = (event) => {
    event.preventDefault();
    const enterTask = enterTaskElement.current.value;
    const enterDate = enterDateElement.current.value;
    handleAddButton(enterTask, enterDate);
    enterTaskElement.current.value = "";
    enterDateElement.current.value = "";
  };
  return (
    <form onSubmit={onAddButtonClick} className="add-input">
      <div>
        <input
          className="input-data"
          type="text"
          placeholder="Enter TODO-List Here"
          ref={enterTaskElement}
        />
      </div>
      <div>
        <input className="input-date" type="date" ref={enterDateElement} />
      </div>
      <div>
        <button className="btn-add">Add</button>
      </div>
    </form>
  );
}
export default AddTodoitem;
