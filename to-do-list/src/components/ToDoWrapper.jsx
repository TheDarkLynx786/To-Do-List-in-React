import Form from "./Form"
import ToDo from "./ToDo"



function ToDoWrapper() {
    return (
        <div className="form-bg"> 
            <h3>ToDo</h3>
            <Form/>
            <ToDo/>
        </div>
    );
}

export default ToDoWrapper