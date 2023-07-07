import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <HashRouter basename={"/"}>
      <Switch>
        <Route path="/">
          <Coins />
        </Route>
        <Route path="/:coinId">
          <Coin />
        </Route>
      </Switch>
    </HashRouter>
  );
}
export default Router;
