import React from "react";
import Client from "./props/Client";

const clients = [
  { nom: "Baaj", prenom: "Dina" },
  { nom: "Elkhiyary", prenom: "Hind" }
];

function App() {
  return (
    <div>
      <h1>Liste des clients</h1>
      <ul>
        {clients.map((cl, i) => (
          <li key={i}>
            <Client client={cl} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
