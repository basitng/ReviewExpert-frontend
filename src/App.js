import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./Home";
import LeadersBoard from "./LeadersBoard";
import Profile from "./Profile";
import SingleReview from "./singeReview";
import { AnimatePresence } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";
import Dashbaord from "./Dashboard";
import CreateReview from "./CreateReview";
import Statistic from "./Statistic";
import Profile2 from "./Profile2";

function App() {
  const location = useLocation();
  const [isActive, setIsActive] = React.useState("");
  const [isDashboard, setIsDashboard] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setIsActive(location.pathname);
    if (location.pathname.includes("/dashboard")) {
      setIsDashboard(true);
    }
  }, [location]);

  return (
    <React.Fragment>
      <NavBar
        isDashboard={isDashboard}
        isAuthenticated={isAuthenticated}
        isActive={isActive}
      />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location}>
          <Route exact component={Home} path="/" />
          <Route component={LeadersBoard} path="/board" />
          <Route component={Profile} path="/profile" />
          <Route component={Profile2} path="/dashboard/profile" />
          <Route component={Login} path="/login" />
          <Route component={Signup} path="/signup" />
          <Route component={Dashbaord} path="/dashboard/home" />
          <Route component={CreateReview} exact path="/dashboard/create" />
          <Route component={Statistic} exact path="/dashboard/statistic" />
          <Route component={SingleReview} path="/:id" />
        </Switch>
      </AnimatePresence>
      <Footer isDashboard={isDashboard} />
    </React.Fragment>
  );
}

export default App;
