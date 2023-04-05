import Home from "./home/Home";
import GlobalStyle from "./styles/stylesGlobal";
import { ThemeProvider } from "styled-components";
import Themers from "./styles/theme";
import { Div } from "./styles/styledApp";
import { Login } from "./login/Login";
import { Allprodutos } from "./allprodutos/allprodutos";

function App() {
  return (
   <Div>
    <ThemeProvider theme = {{Themers}}>
      <GlobalStyle/>
      {/* <Home/> */}
      {/* <Login/> */}
      <Allprodutos/>
    </ThemeProvider>
    
      
   </Div>
    
  );
}

export default App;
