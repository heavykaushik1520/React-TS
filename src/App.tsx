// App.tsx
import React, { useState } from "react";
import ToDo from "./components/ToDo"; // Changed import to use the correct name
import Counter from "./components/Counter";


const myTodoItems = [
    {
        id: 1,
        title: "I need to finish my homework"
    },
    {
        id: 2,
        title: "I need to watch a movie" // Fixed the typo in the title
    }
]

const App: React.FC = () => {
    const[state , setState]=useState<boolean>(true);
    return (
        <div>
            <ToDo items={myTodoItems}/> {/* Changed component name to 'ToDo' */}
            <button onClick={(e)=>setState(!state)}>Toggle</button>
            {state ? <Counter/> : ""}
        </div>
    )
}

export default App;
