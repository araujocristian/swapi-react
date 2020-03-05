import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./routes";

// import Header from "./components/Header";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        {routes.map((route, i) => {
          const { component, ...options } = route;
          return <Route key={i} component={component} {...options} />;
        })}
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
