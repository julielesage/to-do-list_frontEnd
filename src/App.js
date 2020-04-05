import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Line from "./components/Line";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./css/reset.css";
import "./App.css";

library.add(faListAlt, faTrashAlt);

function App() {
  const [list, setList] = useState([
    { title: "ménage", isDone: false },
    { title: "courses à auchan", isDone: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    const tab = [...list];
    const obj = { title: newTask, isDone: false };
    tab.push(obj);
    setList(tab);
    setNewTask("");
  };

  return (
    <>
      <Header />
      <div className="container">
        {list.map((task, i) => {
          return (
            <Line
              {...task}
              key={task.title}
              i={i}
              list={list}
              setList={setList}
            />
          );
        })}

        <form onSubmit={addTask}>
          <input
            type="text"
            placeholder="What do you have to do later ?"
            name="task"
            value={newTask}
            onChange={(e) => {
              e.preventDefault();
              setNewTask(e.target.value);
            }}
          />
          <button type="submit">ADD TASK</button>
        </form>
        <Footer />
      </div>
    </>
  );
}

export default App;
