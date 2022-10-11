import React from "react";

function Todos(props) {
  return (
    <div className="todos">
      {props.todos.map((item, index) => {
        return (
          <div className="todos" key={index}>
            <div className={`todo ${item.star ? "todo_class" : ""}`}>
              <div className="star">
                <button onClick={() => props.makeStar(index)}>★</button>
              </div>
              <div className="todo_text">{item.text}</div>
              <div className="delet_btn">
                <button onClick={() => props.deleteClick(index)}>✖</button>
              </div>
            </div>
          </div>
        );
      })}
      
    </div>
  );
}

export default Todos;
