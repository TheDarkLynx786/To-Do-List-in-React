import { useRef } from "react";
import {useState} from 'react';
import ToDo from "./ToDo"





function Form(props) {
    
    const [input, setInput] = useState();
    const inpRef = useRef();
    
    const changeHandler = e => {
        setInput(e.target.value);
    }
    
    const submitHandler = e => {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');

    };


    return (
        <>
        <div className="form-style">
            <input type="text" ref={inpRef} onChange={changeHandler} placeholder="Enter a New Task"/>
            <button onClick={submitHandler}>Add</button>
        </div>
        <ToDo input={input}/>
        </>
    );
}

export default Form