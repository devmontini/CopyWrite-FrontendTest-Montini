import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

test("Reverse text should by rendered when click", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputText = screen.getByPlaceholderText(/enter text/i);
  expect(inputText).toBeInTheDocument();

  fireEvent.change(inputText, { target: { value: "test" } });
  expect(inputText.value).toBe("test");
  fireEvent.click(screen.getByRole("presentation"));

  await screen.findByText(/tset/i);
});

test("A list of 2 text should by rendered when click", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputText = screen.getByPlaceholderText(/enter text/i);
  expect(inputText).toBeInTheDocument();

  fireEvent.change(inputText, { target: { value: "neuquen" } });
  expect(inputText.value).toBe("neuquen");
  fireEvent.click(screen.getByRole("presentation"));

  await screen.findByText(/neuquen/i);
});
