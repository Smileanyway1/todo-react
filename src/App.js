import "./App.css";
import React from "react";
import AddItem from "./component/AddItem";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import TodoDetail from "./component/TodoDetail";
function App() {
  const todoList = useSelector((state) => state);
  console.log(todoList);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddItem />} />
        {todoList.map((todo) => {
          return (
            <Route
              path={todo?.id.toString()}
              element={<TodoDetail todo={todo} />}
              key={todo.id}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
