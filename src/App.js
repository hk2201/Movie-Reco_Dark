import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react"
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";



function App() {

  const [darkmode, setdarkmode] = React.useState(true)

  function darkMode() {
    setdarkmode(prev => !prev)

  }



  const dMode = {
    backgroundColor: darkmode ? "black" : "grey",
  }


  return (
    <BrowserRouter>
      <Header darkmode={darkmode} darkMode={darkMode} />
      <div style={dMode} className="app" >
        <Container >
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation darkmode={darkmode} />
    </BrowserRouter>
  );
}

export default App;
