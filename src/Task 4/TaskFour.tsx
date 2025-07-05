import { useContext, useEffect, useState } from "react";
import ThemeContext, { ThemeProvider } from "../DarkTheme/ThemeContext";
import useWindowSize from "../WindowSize/useWindowSize";

function TaskFour() {
  const { width, height } = useWindowSize();
  const names = [
    {
      id: 1,
      name: "Aizen",
    },
    {
      id: 2,
      name: "Urahara",
    },
    {
      id: 3,
      name: "Ichigo",
    },
  ];

  const nameList = names.map((name) => (
    <div key={name.id}>
      <h2>
        {name.id} - {name.name}
      </h2>
    </div>
  ));

  const setUseRef = (useRef) => {
    if (useRef) {
      useRef.focus();
    }
  };

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: theme == "light" ? "white" : "black",
          color: theme == "light" ? "black" : "white",
        }}
      >
        <div>
          <h1>List Rendering using map() function</h1>
          {nameList}
        </div>
        <div className="mt-4">
          <h1>
            <u>Focus input using ref</u>
          </h1>
          <input type="text" ref={setUseRef} />
        </div>
        <div className="mt-4">
          <h1>Dark Mode Toggle</h1>
          <button className="btn btn-dark" onClick={toggleTheme}>
            Toggle Theme
          </button>
        </div>
        <div className="mt-4">
          <h1>Window Size: Width</h1>
          <h2>{width} px</h2>
          <h1>Window Size: Height</h1>
          <h2>{height} px</h2>
        </div>
      </div>
    </>
  );
}

export default TaskFour;
