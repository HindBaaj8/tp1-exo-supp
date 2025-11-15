import image1 from './image1.png';

function Contenu() {
  return (
    <div className="card">
      <img src={image1} alt="Image" />
      <h2>wirless bluetooth headest</h2>
      <div className="card-buttons">
        <button>Bouton 1</button>
        <button>Bouton 2</button>
      </div>
    </div>
  );
}

export default Contenu;
