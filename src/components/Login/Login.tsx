import React, { useState } from 'react';
import firebase from '../../firebase';
import { Pane, majorScale } from 'evergreen-ui';
import { LoginHeader } from './LoginHeader';
import { LoginForm } from './LoginForm';
import { LoginError } from './LoginError';


export function Login() {
  const [loginError, setLoginError] = useState<string | undefined>(undefined);
  const [signingIn, setSingingIn] = useState<boolean>(false);

  async function signIn(email: string, password: string): Promise<void> {
    try {
      setSingingIn(true);
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      switch (e.code) {
        case 'auth/invalid-email':
          setLoginError('This email seems invalid.');
          break;
        case 'auth/user-disabled':
          setLoginError('Your account has been disabled.');
          break;
        default:
          setLoginError('These credentials are not correct.');
      }
    } finally {
      setSingingIn(false);
    }
  }

  return (
    <Pane {...backgroundStyle}>
      <Pane elevation={4} background="tint1" padding={majorScale(3)}>
        <LoginHeader />
        <LoginError error={loginError} />
        <LoginForm
          onLoginClick={signIn}
          onInputChange={() => setLoginError(undefined)}
          error={loginError}
          loading={signingIn}
        />
      </Pane>
    </Pane>
  )
}

const backgroundStyle = {
  background: "url('/assets/background.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: "center"

}