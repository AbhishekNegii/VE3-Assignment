import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import MainPage from "./ModuleOne/MainPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/mainpage" exact>
        <MainPage />
      </Route>
    </Switch>
  );
}

export default App;
