import {React,useState} from 'react';
import TodoList from './TodoList';

const Header = () => {
    const [isShowForm, setIsShowForm] = useState(false);
    return (
        <div>
            <h1>Todo</h1>
            <ul>
                <button onClick={() => setIsShowForm(true)}>All</button>
                <button>Active</button>
                <button>Completed</button>
                {isShowForm && <TodoList />}
            </ul>
        </div>
    );
};

export default Header;