import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import MainPage from "./ModuleOne/MainPage";
import Page2 from "./ModuleTwo/Page2";
import Page3 from "./ModuleTwo/Page3";
import Page4 from "./ModuleTwo/Page4";
import Page5 from "./ModuleTwo/Page5";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/mainpage" exact>
        <MainPage />
      </Route>
      <Route path="/page2" exact>
        <Page2 />
      </Route>
      <Route path="/page3" exact>
        <Page3 />
      </Route>
      <Route path="/page4" exact>
        <Page4 />
      </Route>
      <Route path="/page5" exact>
        <Page5 />
      </Route>
    </Switch>
  );
}

export default App;
