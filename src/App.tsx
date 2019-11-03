import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from './firebase';
import { Home } from './components/Home';
import { FullScreenLoader } from './components/FullScreenLoader';

const App: React.FC = () => {
  const [user, initialising, error] = useAuthState(firebase.auth());

  return (
    <div className="App">
      {initialising && <FullScreenLoader text='App is loading...' />}
      {!initialising && <Home user={user} />}
      {error && <p>Error while connecting to backend.</p>}
    </div>
  );
}

export default App;
