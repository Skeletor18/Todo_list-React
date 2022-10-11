import React from "react";

function Form(props) {
  return (
    <div className="forma">
      <input
        type="text"
        placeholder="Введите текст..."
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
      <button onClick={props.addTodos}>Добавить</button>
    </div>
  );
}
export default Form;
