import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home"
// import Compiler from "./Compiler"
// import Timetable from "./Timetable"
import Paper from "./Paper"
import Nav from "./Nav"
import Header from './Header';
import Footer from "./Footer"
import About from "./About"
import Weather from "./Weather"
function App() {
  return (
    <div>
      <Header />

      {<BrowserRouter>
        <Nav />
        <Switch>

          <Route exact path="/weather" component={Weather} />
          <Route exact path="/" component={Home} />
          <Route exact path="/paper" component={Paper} />
          <Route exact path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>}
    </div>
  )
}

export default App
