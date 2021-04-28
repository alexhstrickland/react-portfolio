import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Portfolio from "./pages/portfolio/index";
import React, { useState } from "react";
import PageContext from "./utils/PageContext";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css"

function App() {
  const [pageState, setPageState] = useState({
    display: false,
    theme: "success",
    onClick: (theme, display) => {

      setPageState({ ...pageState, theme, display });
    }

  });


  return (
    <PageContext.Provider value={pageState}>
      <Router>
      <div>
        <Header/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Portfolio" component={Portfolio}/>
        <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer/>


      </div>
      </Router>
    </PageContext.Provider>
  );
}

export default App;