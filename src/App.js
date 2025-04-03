import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import WorkGallery from "./components/WorkGallery";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <h1>Welcome to Dolla Heating and Cooling</h1>
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
          <Route path="/gallery">
            <WorkGallery />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
