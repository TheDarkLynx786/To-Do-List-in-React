import { useRef } from "react";
import {useState} from 'react';
import ToDo from "./ToDo"





function Form() {
    
    const [input, setInput] = useState();
    const inpRef = useRef();
    
    const clickHandler = () => {
        inpRef.current.focus();
        setInput(inpRef.current.value);
    };


    return (
        <>
        <div className="form-style">
            <input type="text" ref={inpRef} placeholder="Enter a New Task"/>
            <button onClick={clickHandler}>Add</button>
        </div>
        <ToDo input={input}/>
        </>
    );
}

export default Form