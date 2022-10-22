import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRoutes } from "./config/routes";
import { GlobalStyles } from "./GloablStyles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className="App">
      <ToastContainer autoClose={5000}/>
      <GlobalStyles />
      <Suspense fallback={<div></div>}>
        <BrowserRouter>
          <Switch>
            {renderRoutes.map(([key, route]) => (
              <Route
                key={key}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
