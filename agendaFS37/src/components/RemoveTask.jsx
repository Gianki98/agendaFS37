import Data from "./Data";
import { useState, useEffect } from "react";

function RemoveTask() {
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

  // Elimina i dati nel localStorage quando cambiano
  useEffect(() => {
    localStorage.removeItem("task", task);
  }, [task]);

  useEffect(() => {
    localStorage.removeItem("orario");
  }, [orario]);
  return (
    <>
      <Data />
      <p>{value}</p>
    </>
  );
}
export default RemoveTask;
