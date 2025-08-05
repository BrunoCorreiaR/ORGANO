import Banner from "./component/Banner";
import InputText from "./component/InputText";

function App() {
  return (
    <div className="App">
      <Banner/>
      <InputText label="Nome" placeholder="Informe seu nome"/> 
      <InputText label="Cargo" placeholder="Informe seu cargo"/> 
      <InputText label="Foto" placeholder="Informe o endereço da imagem"/> 
    </div>
  );
}

export default App;
