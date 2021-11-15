import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//FOR NAVBAR
// import Navigation from "./Navigation";
import Navigation from "./components/navbar/Navigation";

//FOR PAGES: HOME, MISSION, FINDWILDFIRES, INFORMATION, NEWS
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import FindWildfires from "./pages/FindWildfires";
import Information from "./pages/Information";
import News from "./pages/News";

//FOR LIGHT/DARK MODE

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mission" component={Mission}></Route>
          <Route exact path="/findwildfires" component={FindWildfires} />
          <Route exact path="/information" component={Information} />
          <Route exact path="/news" component={News} />
        </Switch>
      </Router>
      <div id="footer" className="signin flex">
        <a
          href="mailto:mferna79@calstatela.edu?subject=Subscribe for more news!"
          className="button impact d-tablet"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
}

export default App;
