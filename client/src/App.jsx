import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdateUMPage from "./components/UM/UpdateUMPage";
import UserMasterDetailPage from "./components/UM/UserMasterDetailPage";
import { UserMasterContextProvider } from "./context/UserMasterContext";
import AddUserMaster from "./components/UM/AddUserMaster";
import UserMasterList from "./components/UM/UserMasterList";
import { CandidateContextProvider } from "./context/CandidateContext";
import AddCandidate from "./components/Candidates/AddCandidate";
import UpdateCandidate from "./components/Candidates/UpdateCandidate";
import CandidateDetailPage from "./components/Candidates/CandidateDetailPage";
import Header from "./routes/Header"
import CandidateList from "./components/Candidates/CandidateList";
import './css/App.css';
import LoginPage from "./routes/LoginPage";
import RegisterForm from "./routes/RegisterForm";
import { VolunteerContextProvider } from "./context/VolunteerContext";
import AddVolunteer from "./components/Volunteers/AddVolunteer";
import VolunteerList from "./components/Volunteers/VolunteerList";
import UpdateVolunteer from "./components/Volunteers/UpdateVolunteer";
import VolunteerDetailPage from "./components/Volunteers/VolunteerDetailPage";
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
    <div className="content">
    <UserMasterContextProvider>
    <VolunteerContextProvider>
    <CandidateContextProvider>
      <div className="container">
        <Router>
          <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/home" component={Home} />
            

            {/* User Master Routes */}
            <Route exact path="/userMasters" >
                {/* <AddUserMaster/> */}
                <UserMasterList/>
            </Route>
            <Route exact path="/userMasters/:um_seq/update"
              component={UpdateUMPage}
            />
            <Route exact path="/userMasters/:um_seq">
            {/* <AddVolunteer/> */}
            <UserMasterDetailPage/>
            </Route>

            {/* Volunteer Routes */}
            <Route exact path="/volunteers" >
                <VolunteerList/>
            </Route>
            <Route exact path="/volunteers/:vol_id/update"
              component={UpdateVolunteer}
            />
            <Route exact path="/volunteers/:vol_id">
              <VolunteerDetailPage/>
            </Route>
            <Route exact path="/volunteers/:vol_id/addCandidate">
              <AddCandidate/>
            </Route>

          <Route exact path="/candidates" >
            <CandidateList/>
          </Route>
          <Route
            exact
            path="/candidates/:candidate_id/update"
            component={UpdateCandidate}
          />
          <Route
            exact
            path="/candidates/:candidate_id"
            component={CandidateDetailPage}
          />
        </Switch>
      </Router>
      </div>
  </CandidateContextProvider>
  </VolunteerContextProvider>
  </UserMasterContextProvider>
  </div>
  </>
  );
};

export default App;
