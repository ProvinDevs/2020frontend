import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import TeacherHomePage from "./pages/TeacherHome";
import Footer from "./components/common/Footer";
import PageWrapper from "./theme";

import "./scss/global.scss";

const App: FC = () => (
  <BrowserRouter>
    <PageWrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/teacher" component={TeacherHomePage} />
      </Switch>
      <Footer />
    </PageWrapper>
  </BrowserRouter>
);

export default App;
