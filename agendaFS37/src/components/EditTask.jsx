import Data from "./Data";
import { useState, useEffect } from "react";

function EditTask() {
  const [text, setText] = useState("");
  // Carica i dati dal localStorage all'avvio del componente
  useEffect(() => {
    const storedTask = localStorage.getItem("task");
    const storedOrario = localStorage.getItem("orario");

    if (storedTask) {
      settask(storedTask);
    }
    if (storedOrario) {
      setOrario(parseInt(storedOrario, 10)); // Converte la stringa in numero
    }
  }, []);

  // Salva i dati nel localStorage quando cambiano
  useEffect(() => {
    localStorage.setItem("task", task);
  }, [task]);

  useEffect(() => {
    localStorage.setItem("orario");
  }, [orario]);
  return (
    <>
      <Data />
      <input
        onChange={(event) => setText(event.target.value)}
        type="text"
        name="add"
        id="add"
      />
      <p>{text}</p>
      {/*Salvataggio nel localStorage*/}
      {localStorage.setItem("task", text)}
      {localStorage.setItem("orario", value)}
    </>
  );
}
export default EditTask;
