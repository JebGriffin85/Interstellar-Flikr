import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Discovery from "./components/DiscoveryPage";
import SinglePhoto from "./components/SinglePhoto";
import MyAlbum from "./components/MyAlbum";
import ReactPlayer from 'react-player'
import video from '../src/images/video.mp4'
import * as sessionActions from "./store/session";
import { getPhotos } from './store/home';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(getPhotos())
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <span className='nav'>

      <Navigation isLoaded={isLoaded} />
      </span>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <div className='main-container'>
              <p className='welcome'>Welcome to Interstellar Flikr</p>
            <div className='main-component'>
            <ReactPlayer className='video' url={video} controls={true} />
            </div>
            </div>
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