import { useState } from "react";
import Data from "./Data";
import AddTask from "./addTask";
import EditTask from "./EditTask";
import RemoveTask from "./RemoveTask";

function Task() {
  const [add, setAdd] = useState(false);
  const [modifica, setModifica] = useState(false);
  const [remove, setRemove] = useState(false);
  return (
    <>
      <button onClick={() => setAdd(true)}>Aggiungi Task</button>
      <button onClick={() => setModifica(true)}>Modifica Task</button>
      <button onClick={() => setRemove(true)}>Elimina Task</button>

      {add && <AddTask />}
      {modifica && <EditTask />}
      {remove && <RemoveTask />}
    </>
  );
}
export default Task;
