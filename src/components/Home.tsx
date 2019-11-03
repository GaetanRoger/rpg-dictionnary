
import React from 'react';
import { Login } from './Login';
import firebase from '../firebase';
import { Dictionnaries } from './Dictionnaries';

type HomeProps = {
    user: firebase.User | undefined;
};

export function Home(props: HomeProps) {
    return (
        <div className="App">
            {!props.user && <Login />}
            {props.user && <div>
                <Dictionnaries user={props.user} />
            </div>}
        </div>
    );
}
