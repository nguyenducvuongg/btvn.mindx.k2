import React from "react";
import { useState, useEffect } from "react";


function TodoForm({ onAdd }) {

    const [text, setText] = useState("");

    
  
    const handleSubmit = (e) => {
        
      e.preventDefault();
      onAdd(text);
      setText("");
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add</button>
      </form>
    )
  }

export default TodoForm