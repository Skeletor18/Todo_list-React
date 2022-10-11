import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      star: false,
    },
    {
      text: "Продать квартиру",
      star: true,
    },
    {
      text: "Выучить уроки по JS",
      star: false,
    },
  ]);
  const [text, setText] = useState("");

  const deleteClick = (id) => {
    const filterDelete = todos.filter((item, index) => index !== id);
    setTodos(filterDelete);
  };

  const makeStar = (id) => {
    const newTodo = todos.map((item, index) => {
      if (id === index) {
        if (item.star) {
          return {
            ...item,
            star: false,
          };
        } else {
          return {
            ...item,
            star: true,
          };
        }
      }
      return item;
    });
    setTodos(newTodo);
  };

  const addTodos = () => {
    if (text === "") {
      alert("Вы ничего не записали");
    } else {
      setTodos([
        {
          text: text,
          star: false,
        },
        ...todos,
      ]);
      setText("");
    }
  };

  return (
    <div className="app">
      <Header />
      <Form text={text} addTodos={addTodos} setText={setText} />
      <Todos todos={todos} makeStar={makeStar} deleteClick={deleteClick} />
    </div>
  );
}

export default App;
