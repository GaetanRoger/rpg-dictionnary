
import React, { } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../firebase';
import { DictionnaryEntry } from '../models/dictionnary-entry';
import { Dictionnary as DictionnaryType } from '../models/dictionnary';


type DictionnaryProps = {
  user: firebase.User;
  dictionnary: DictionnaryType;
};

export function Dictionnary(props: DictionnaryProps) {
  const firestoreQuery = firebase.firestore()
    .collection('dictionnary-entries')
    .where('dictionnary.uid', '==', props.dictionnary.uid)
    .where('user.uid', '==', props.user.uid);
  const [snapshot, loading, error] = useCollection(firestoreQuery);

  return (
    <div className="App">
      {props.user && <div>
        <h1>{props.dictionnary.name}</h1>
        {loading && <p>Loading dictionnary entries...</p>}
        {error && <p>Error: {error.message}</p>}
        {!loading && !error && snapshot && <div>
          <ul>
            {snapshot.docs
              .map(doc => ({ uid: doc.id, ...doc.data() } as DictionnaryEntry))
              .map(dict => (
                <li key={dict.uid}>{dict.source.english}: {dict.translation}</li>
              ))}
          </ul>
        </div>}
      </div>}


    </div>
  );
}
