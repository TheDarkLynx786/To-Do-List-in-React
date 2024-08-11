import { useState } from 'react'
import todos from './Form'


function ToDo({input}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    
    
    
    return (
        <div className="todo-entry-style"> 
            {input}
        </div>
    );
}

export default ToDo