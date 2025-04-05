import {useState} from "react";
import { evaluate } from 'mathjs';
import "./Calculator.css";


export function Calculator(){
    const [inputValue, setInputValue] = useState("");
    const [output, setOutput] = useState("");

    const handleClick = (buttonValue) => {
        setInputValue( (previous) => previous + buttonValue );
    };

    const calculate = () => {
        try{
            const result = evaluate(inputValue);
            setOutput(result.toString());
        }catch(err){
            setOutput("Error");
        }
    };

    const handleClear = () => {
        setOutput("");
        setInputValue("");
    };

    return(
        <div className="calculatorBody">
            <h1>React Calculator</h1>
            <div><input type="text" value={inputValue}/></div>
            <div className="output">{output}</div>
            <div className="buttons">
                {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map((btn) => (
                    <button
                        type="button"
                        key={btn}
                        onClick={ () => btn === "=" ? calculate() : btn === 'C' ? handleClear() : handleClick(btn)}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}