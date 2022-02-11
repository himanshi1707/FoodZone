import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/ClientSide/Footer";
import DarkModeToggle from "./Components/ClientSide/DarkModeToggle";
import BuyButton from "./Components/ClientSide/BuyButton";
import Main from "./Components/ClientSide/MainComponent";
import ShowItems from "./Components/ClientSide/ShowItems";
import Soup from "./Components/ClientSide/Soup";
import TypesofSalad from "./Components/ClientSide/TypesofSalad";
import VeggieBurgers from "./Components/ClientSide/VeggieBurgers";
import VegPizzas from "./Components/ClientSide/VegPizzas";
import FoodzoneHeader from "./Components/ClientSide/FoodzoneHeader";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Components/ClientSide/redux/configureStore";

const store = ConfigureStore();

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Route strict exact path="/main" history={props.history}>
          <Main />
        </Route>
        <Route strict exact path="/showitems" history={props.history}>
          <ShowItems />
        </Route>
        <Route strict exact path="/soup" history={props.history}>
          <Soup />
        </Route>
        <Route strict exact path="/typesofsalad" history={props.history}>
          <TypesofSalad />
        </Route>
        <Route strict exact path="/veggieburgers" history={props.history}>
          <VeggieBurgers />
        </Route>
        <Route strict exact path="/vegpizzas" history={props.history}>
          <VegPizzas />
        </Route>
        <Route strict exact path="/foodzoneheader" history={props.history}>
          <FoodzoneHeader />
        </Route>
        <Route strict exact path="/footer" history={props.history}>
          <Footer />
        </Route>
        <Route strict exact path="/darkmodetoggle" history={props.history}>
          <DarkModeToggle />
        </Route>
        <Route strict exact path="/buybutton" history={props.history}>
          <BuyButton />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
