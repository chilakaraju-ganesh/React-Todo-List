import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../Store/todo-items-store";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  const { handleOnButtonDelete } = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          taskName={item.name}
          taskDate={item.Duedate}
          onButtonDelete={handleOnButtonDelete}
        ></TodoItem>
      ))}
    </>
  );
};
export default TodoItems;
