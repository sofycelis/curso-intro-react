import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";



function TodoCounter() {
    const {totalTodos , completedTodos} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <div className="header-Container">
                <h1 className=
                "Title">My ToDo App
                </h1>
                <img className="img" alt="kirby" src={require("../kirby.png").default} />
            </div>
                <h2 className=
                "TodoCounter">Has completado {completedTodos} de {totalTodos} ToDo's 🍓</h2>
            
        </React.Fragment>
        
    );
}

export { TodoCounter };