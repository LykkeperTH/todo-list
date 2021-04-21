import { Card, Form, ListGroup, Row } from "react-bootstrap";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Form.Group as={Row} key={todo.id} style={{ justifyContent: "center" }}>
          <Card style={{ width: "18rem" }}>
            <ListGroup
              variant="flush"
              onChange={(event) => event.preventDefault()}
            ></ListGroup>
            <ListGroup.Item>{todo.title}</ListGroup.Item>
          </Card>
        </Form.Group>
      ))}
    </div>
  );
};
export default TodoList;
