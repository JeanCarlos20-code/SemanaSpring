import {
  BrowserRouter,
  Routes,
  Route //usado para configurar as rotas
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";

function App() {
  return (
    //BrowserRouter inicia a configuração das rotas
    //Navbar foi colocado antes das rotas pois é a página principal 
    //routes irá configurar rota por rota
    //route no caminho / para abrir no elemento listing
    //tem uma subrota no form para chamar filme 1, filme 2 e etc
    <BrowserRouter>  
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;