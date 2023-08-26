import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <div className="todo-item">
        <input 
          type="checkbox" 
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
        <span className="delete" onClick={() => onDelete(todo.id)}>X</span>
      </div>
    );
  }

  export default TodoItem