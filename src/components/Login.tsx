import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import firebase from '../firebase';
import { Button } from '@material-ui/core';

export function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string | undefined>(undefined);

  function onEmailChange(event: any) {
    const newValue: string = event.target.value;
    setEmail(newValue);
    setLoginError(undefined);
  }

  function onPasswordChange(event: any) {
    const newValue: string = event.target.value;
    setPassword(newValue);
    setLoginError(undefined);
  }

  async function login() {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      switch (e.code) {
        case 'auth/invalid-email':
          setLoginError(`This email address is invalid.`);
          break;
        case 'auth/user-disabled':
          setLoginError(`This account has been disabled.`);
          break;
        default:
          setLoginError(`Given credentials are invalid.`);
          break;
      }
    }
  };

  return (
    <div className="App">
      <TextField
        label="Email"
        type='email'
        value={email}
        onChange={onEmailChange}
        error={!!loginError}
        helperText={loginError}
        required
      />
      <TextField
        label="Password"
        type='password'
        value={password}
        onChange={onPasswordChange}
        error={!!loginError}
        required
      />
      <Button
        onClick={login}
      >Login</Button>
    </div>
  );
}
