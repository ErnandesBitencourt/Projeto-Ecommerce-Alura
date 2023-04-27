import React from "react";
import GlobalStyle from "./styles/stylesGlobal";
import { ThemeProvider } from "styled-components";
import Themers from "./styles/theme";
import { Div } from "./styles/styledApp";
import { RouterPages } from "./routes/Router";

function App() {


  return (
   <Div>
    <GlobalStyle/>
     <ThemeProvider theme = {{Themers}}>
      <RouterPages/>  
    </ThemeProvider>
  </Div>
    
  );
}

export default App;
