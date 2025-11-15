import React, { useState } from "react";

function Compteur() {
  const [number, setNumber] = useState(4);

  return (
    <div style={{color:"white"}}>
      <button onClick={() => setNumber(number + 1)}id="btnn">+</button>
      <span style={{ margin: "10px", fontSize: "20px"}} >{number}</span>
      <button onClick={() => setNumber(number - 1)} id="btn">-</button>
    </div>
  );
}

export default Compteur;