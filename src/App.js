import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Contact, IH, Bios, ClassStyle, Gallery, FirstDay, Info, LRDetails, URDetails, Reviews, TP} from "./components";
import Events from './components/Events';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/info&history" exact component={() => <IH />} />
          <Route path="/class-styles" exact component={() => <ClassStyle />} />
          <Route path="/lowerrank-details" exact component={() => <LRDetails />} />
          <Route path="/upperrank-details" exact component={() => <URDetails />} />
          <Route path="/bios" exact component={() => <Bios />} />
          <Route path="/important-info" exact component={() => <Info />} />
          <Route path="/day1" exact component={() => <FirstDay />} />
          <Route path="/events" exact component={() => <Events />} />
          <Route path="/reviews" exact component={() => <Reviews />} />
          <Route path="/time&money-details" exact component={() => <TP />} />
          <Route path="/gallery" exact component={() => <Gallery />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
