import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignupComponent from "./components/auth/SignupComponent";
import LoginComponent from "./components/auth/LoginComponent";
import ContentsList from "./components/contents/ContentsList";
import ContentDetail from "./components/contents/ContentDetail";
import ProfilePage from "./components/user/ProfilePage";
import ContentCalendar from "./components/contents/ContentCalendar";
import HomePage from "./components/contents/HomePage";
import ContentCreate from "./components/contents/ContentCreate";
import FetchApi from "./components/contents/FetchApi";

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/signup" component={SignupComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route exact path="/contents" component={ContentsList} />
        <Route exact path="/contents/new" component={ContentCreate} />
        <Route path="/content/:id" component={ContentDetail} />
        <Route path="/profile/" component={ProfilePage} />
        <Route path="/calendar/" component={ContentCalendar} />
        <Route path="/fetchapi/" component={FetchApi} />
      </Switch>
    );
  }
}

export default Routes;
