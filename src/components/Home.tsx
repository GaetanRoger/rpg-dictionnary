
import React from 'react';
import { Login } from './Login/Login';
import { Dictionaries } from './Dictionaries/Dictionaries';
import { User } from '../models/user';

type HomeProps = {
  user: User | undefined;
};

export function Home(props: HomeProps) {
  return (
    <div className="App">
      {!props.user && <Login />}
      {props.user && <Dictionaries user={props.user} />}
    </div>
  );
}
