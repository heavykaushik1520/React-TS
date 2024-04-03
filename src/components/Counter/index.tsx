import React ,{useState, useEffect}from "react";
import "./style.css"

const Counter: React.FC = (props)=>
{
    const[counter , setCounter] = useState(0);
    useEffect(()=>{
        console.log("Counter mounted")},[]); //empty dependancy array means whole component
    useEffect(()=>{
        (console.log("counter updated"))},[counter]);//with dependancy array means that specific component


    const handleInrement= ()=>
    {
        setCounter(counter+1);
    }

    const handleDecrement=()=>
    {
        if(counter === 0) return ;
        setCounter(counter-1);
    }
    return(
        <div className="counter-container">
            <h1>
                {counter}
                
            </h1>
            <button onClick={handleInrement} style={{background :"lightgreen"}}>INC</button>
            <button onClick={handleDecrement} style={{background : "tomato"}}>DEC</button>

        </div>
    )
}

export default Counter;