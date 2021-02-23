import React from "react";
import ReactDOM from "react-dom";

//import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

//components
import VideoList from "./components/Videos/VideoList";
import VideoForm from "./components/Videos/VideoForm";
import NavBar from "./components/NavBar/NavBar";
import VideoFormEdit from './components/Videos/VideoFormEdit';

// styles

import "bootswatch/dist/darkly/bootstrap.min.css";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <div className="container ts-4">
        <Switch>
          <Route exact path="/" component={VideoList} />
          <Route path="/new-video" component={VideoForm} />
          <Route path="/editvideo/:id" component={VideoFormEdit} />
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
