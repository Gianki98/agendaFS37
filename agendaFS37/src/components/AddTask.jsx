import Data from "./Data";
import { useState, useEffect } from "react";

function AddTask() {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  // Salva i dati nel localStorage quando cambiano
  useEffect(() => {
    localStorage.setItem("task", text);
  }, [text]);
  useEffect(() => {
    setValue(localStorage.getItem("orario"));
    console.log(value);
  }, [text]);
  return (
    <>
      <Data />
      <input
        onChange={(event) => setText(event.target.value)}
        type="text"
        name="add"
        id="add"
      />
      <p>
        Hai scelto la fascia oraria: <br />
        {value} | {text}
      </p>
    </>
  );
}
export default AddTask;
