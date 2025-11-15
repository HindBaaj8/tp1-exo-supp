
function Client({ client }) {

  const handleClick = () => {
   
  };

  return (
    <div>
      <button onClick={handleClick}>
        Afficher message pour {client.prenom}                                                                           
      </button>
     <h2>Bienvenue {client.prenom}</h2>
    </div>
  );
}

export default Client;
