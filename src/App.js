import React from 'react';
import SplashScreen from "./components/SplashScreen";
import GlobalStyle from "./theme/globalStyles"

const App = () => {
  return (
    <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <GlobalStyle />
      <SplashScreen />
    </div>
  );
}

export default App;
