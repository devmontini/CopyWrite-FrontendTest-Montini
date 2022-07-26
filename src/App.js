import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getText } from "./features/reverseText";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const textReverse = useSelector((state) => state.text);
  const dispatch = useDispatch();

  const textSort = textReverse.text.split().reverse().join();

  const handeleReverseText = (e) => {
    if (!input) return;
    dispatch(getText(input));
    setInput("");
    e.preventDefault();
  };

  return (
    <div className="App bg-secondary">
      <header className="App-header">
        <Form className="m-3">
          <Form.Group>
            <Form.Label className="m-3">Copywrite Code Challenge</Form.Label>
            <Form.Control
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required="required"
              placeholder="Enter Text"
            ></Form.Control>
            <Button onClick={(e) => handeleReverseText(e)} role="presentation">
              Send
            </Button>
          </Form.Group>
        </Form>
        <Card className="m-3">
          <Card.Body>
            <Card.Title className="mb-6">List</Card.Title>
            {textReverse.status === "success" ? (
              textSort.map((el) => {
                return (
                  <Card.Subtitle
                    className="m-4"
                    key={Math.random() * 33 + Date.now()}
                  >
                    {el.text}
                    {el.palindrome ? (
                      <Card.Text className="text-muted">Palindrome!</Card.Text>
                    ) : (
                      <Card.Text className="text-muted">
                        Not palindrome!
                      </Card.Text>
                    )}
                  </Card.Subtitle>
                );
              })
            ) : (
              <Card.Subtitle className="m-4 text-muted">No texts</Card.Subtitle>
            )}
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
