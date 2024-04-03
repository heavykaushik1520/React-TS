// ToDo.tsx
import React from "react";
import TodoItem from "./TodoItem"; // Changed import to use the correct name
import "./style.css"

interface ITodoItems {
    id: number;
    title: string; // Changed to lowercase 'string'
}

interface TodoProps {
    items: ITodoItems[];
}

const ToDo: React.FC<TodoProps> = (props) => { // Changed component name to 'ToDo'
    return (
        <div className="todo-container">
            <ol>
                {props.items.map((item) => (
                    <TodoItem key={item.id} title={item.title}/> // Added key prop for optimization
                ))}
            </ol>
        </div>
    )
};

export default ToDo;
