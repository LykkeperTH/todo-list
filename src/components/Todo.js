import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const Todo = ({ text, setText, toDos, setToDos }) => {
  const onTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSummit = () => {
    setToDos([...toDos, { id: uuidv4(), name: text, complete: false }]);
    setText("");
  };
  return (
    <Form.Group onSubmit={handleSummit}>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Large text"
        value={text}
        onChange={onTextChange}
      />
      <Button variant="primary">Primary</Button>
    </Form.Group>
  );
};
export default Todo;
