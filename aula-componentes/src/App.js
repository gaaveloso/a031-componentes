import './App.css';
import CardVideo from './components/CardVideo';
function App() {
  const info = {
    titulo: "Titulo do video",
    user: "Bob Esponja"
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>
        <CardVideo titulo={info.titulo} user={info.user}/>
        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;