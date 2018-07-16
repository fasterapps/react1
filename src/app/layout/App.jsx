import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Route, Switch } from "react-router-dom";

import EventDashboard from "../../features/events/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";

import EventDetailedPage from "../../features/events/EventDetailed/EventDetailedPage";
import EventForm from "../../features/events/EventForm/EventForm";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailed from "../../features/user/UserDetailed/UserDetailed";
import HomePage from "../../features/home/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event:id" component={EventDetailedPage} />
                  <Route path="/People" component={PeopleDashboard} />
                  <Route path="/Profile/:id" component={UserDetailed} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
