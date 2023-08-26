import { React , useState, useEffect } from 'react'
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function TodoList() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      if (storedTodos) setTodos(storedTodos);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    let nextId = 0;

    const addTodo = (text) => {
        setTodos([
            ...todos, 
            {
              id: nextId++, 
              text, 
              completed: false 
            }
          ]);
    };
  
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed
              };
            }
            return todo;
          }));    
    };
    
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
  
    return (
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={removeTodo} 
          />
        ))}
        <TodoForm onAdd={addTodo} />
      </div>
    );
  
  }

  export default TodoList