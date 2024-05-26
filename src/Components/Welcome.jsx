import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";

function Welcome() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className="message">Start Your Day With A Positive Energy</p>
    )
  );
}
export default Welcome;
