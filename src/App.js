import './App.css';
import Card from '../src/components/Card';
import { Grid } from "@mui/material";
import PeoplePage from '../src/pages/PeoplePage';

const App = () => {
  return (
    <div>
    <h1>Buscador de Egressos - Sistemas de Informação</h1>
    <PeoplePage />
    <footer className="footer">
        <p>Desenvolvido por: Guilherme Scarano e Luiz Silva</p>
      </footer>
  </div>
  );
};

export default App;
