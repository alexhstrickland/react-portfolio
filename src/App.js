import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
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
        <Route exact path="/Portfolio" component={Portfolio}/>
        <Route exact path="/Contact" component={Contact} />
        </Switch>
        <Footer />


      </div>
      </Router>
    </PageContext.Provider>
  );
}