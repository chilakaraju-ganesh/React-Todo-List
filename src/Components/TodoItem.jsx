const TodoItem = ({ taskName, taskDate, onButtonDelete }) => {
  return (
    <div className="todo-list">
      <div className="todo-name">{taskName}</div>
      <div className="todo-date">{taskDate}</div>
      <div>
        <button className="btn-delete" onClick={() => onButtonDelete(taskName)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
