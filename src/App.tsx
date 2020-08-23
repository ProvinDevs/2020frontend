import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ClassPage from "./pages/student/Class";
import Footer from "./components/common/Footer";
import PageWrapper from "./theme";

import "./scss/global.scss";

const App: FC = () => (
  <BrowserRouter>
    <PageWrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/student/class" component={ClassPage} />
      </Switch>
      <Footer />
    </PageWrapper>
  </BrowserRouter>
);

export default App;
