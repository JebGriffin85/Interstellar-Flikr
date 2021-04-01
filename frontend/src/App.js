import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Discovery from "./components/DiscoveryPage";
import SinglePhoto from "./components/SinglePhoto";
import MyAlbum from "./components/MyAlbum";
// import ReactPlayer from 'react-player'
// import video from '../src/images/video.MOV'
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <h1>
          
            </h1>
          </Route>
          <Route exact path='/discovery'>
          <Discovery/>
          </Route>
          <Route path={`/myAlbum/:id`}>
            <MyAlbum />
          </Route>
          <Route path={`/photos/:id`}>
            <SinglePhoto />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;