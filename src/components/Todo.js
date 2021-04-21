import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const Todo = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
    // console.log(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: input,
        complete: false,
      },
    ]);
    setInput("");
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group
        role="form"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Form.Control
          size="md"
          type="text"
          placeholder="Large text"
          value={input}
          required
          style={{ width: "50%" }}
          onChange={onInputChange}
        />
        <Button variant="primary" type="submit" style={{ marginLeft: "10px" }}>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};
export default Todo;
