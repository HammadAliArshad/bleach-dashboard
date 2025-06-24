import React from "react";

function clickEvent() {
  function clickHandler() {
    alert("Button Clicked...");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default clickEvent;
