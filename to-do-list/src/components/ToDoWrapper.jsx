import {useState} from 'react'
import Form from "./Form"
import ToDo from "./ToDo"



function ToDoWrapper() {
    const [todos, setTodos] = useState([])
    
    const addTask = todo => {
        if(!todo.text || (/\s+/g).test(todo.text)) return;

        const newTasks = [todo, ...todos];
        setTodos(newTasks);

        console.log(...todos);
        
    };
    
    return (
        <div className="form-bg"> 
            <h3>ToDo</h3>
            <Form onSubmit={addTask}/>
        </div>
    );
}

export default ToDoWrapper