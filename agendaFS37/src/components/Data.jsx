import { useState, useEffect } from "react";

function Data() {
  const [value, setValue] = useState("");
  useEffect(() => {
    localStorage.setItem("orario", value);
  }, [value]);
  return (
    <>
      <h3>Scegli la fascia oraria</h3>
      <select
        onChange={(event) => setValue(event.target.value)}
        name="data"
        id="data"
      >
        <option value="9-10">9-10</option>
        <option value="10-11">10-11</option>
        <option value="11-12">11-12</option>
        <option value="12-13">12-13</option>
        <option value="13-14">13-14</option>
        <option value="14-15">14-15</option>
        <option value="15-16">15-16</option>
        <option value="16-17">16-17</option>
        <option value="17-18">17-18</option>
      </select>
      <p>{value}</p>
    </>
  );
}
export default Data;
