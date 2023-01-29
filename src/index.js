import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@innovaccer/design-system/css";

import App from "./App";
import { Todo } from "./components/HomePage/Todo";
import { store } from "./store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todo/:objid" element={<Todo />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
);
