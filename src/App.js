import { useState } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <Container>
      <Jumbotron style={{ marginTop: "30px" }}>
        <Header />
        <Todo
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </Jumbotron>
    </Container>
  );
};

export default App;
