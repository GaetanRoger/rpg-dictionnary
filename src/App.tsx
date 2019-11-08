import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from './firebase';
import { Home } from './components/Home';
import { FullScreenLoader } from './components/FullScreenLoader';
import { User } from './models/user';

const App: React.FC = () => {
  const [user, initializing, error] = useAuthState(firebase.auth());

  return (
    <div className="App">
      {initializing && <FullScreenLoader text='App is loading...' />}
      {!initializing && <Home user={user && {uid: user.uid, email: user.email || ''}} />}
      {error && <p>Error while connecting to backend.</p>}
    </div>
  );
}

export default App;
