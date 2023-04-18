import Home from "./home/Home";
import GlobalStyle from "./styles/stylesGlobal";
import { ThemeProvider } from "styled-components";
import Themers from "./styles/theme";
import { Div } from "./styles/styledApp";
import { Login } from "./componentes/login/Login";
import { Allprodutos } from "./pageAllprodutos/allprodutos";
import { AdicionarProdutos } from "./componentes/adicionarProdutos/AdicionarProdutos";



function App() {
  return (
   <Div>
    <ThemeProvider theme = {{Themers}}>
      <GlobalStyle/>
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Allprodutos/> */}
      <AdicionarProdutos/>

    </ThemeProvider>
      
      
   </Div>
    
  );
}

export default App;
