import Home from "./home/Home";
import GlobalStyle from "./styles/stylesGlobal";
import { ThemeProvider } from "styled-components";
import Themers from "./styles/theme";

function App() {
  return (
   <div>
    <ThemeProvider theme = {{Themers}}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
    
      
   </div>
    
  );
}

export default App;
