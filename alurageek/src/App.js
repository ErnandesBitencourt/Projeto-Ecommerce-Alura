import Home from "./home/Home";
import GlobalStyle from "./styles/stylesGlobal";
import { ThemeProvider } from "styled-components";
import Themers from "./styles/theme";
import { Div } from "./styles/styledApp";

function App() {
  return (
   <Div>
    <ThemeProvider theme = {{Themers}}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
    
      
   </Div>
    
  );
}

export default App;
