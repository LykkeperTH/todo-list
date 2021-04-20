import { useState } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState("");

  return (
    <Container>
      <Header />
      <Todo input={text} setInput={setText} toDos={toDos} setToDos={setToDos} />
      <TodoList />
    </Container>
  );
};

export default App;
