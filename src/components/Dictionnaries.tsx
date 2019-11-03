
import React, { useState } from 'react';
import { Login } from './Login';
import { TextField, Button } from '@material-ui/core';
import firebase from '../firebase';
import { Dictionnary as DictionnaryComponent } from './Dictionnary';
import { Dictionnary } from '../models/dictionnary';
import { useCollectionData } from '../helpers/hooks/use-collection-data';
import { FirestoreCollectionQueryBuilder as QueryBuilder } from '../helpers/firestore-collection-query-builder';
  
type DictionnariesProps = {
  user: firebase.User;
};

export function Dictionnaries(props: DictionnariesProps) {
  const firestoreQuery = QueryBuilder.collection('dictionnaries').ownedBy(props.user.uid).build();
  const [dictionnaries, loading, error] = useCollectionData<Dictionnary>(firestoreQuery);

  const [selectedDictionnary, setSelectedDictionnary] = useState<Dictionnary | undefined>(undefined);

  return (
    <div className="App">
      {!props.user && <Login />}
      {props.user && !selectedDictionnary &&
        <div>
          <h1>Welcome</h1>
          <TextField
            placeholder='Search for a dictionnary...'
            variant='outlined'
          />
          {loading && <p>Loading dictionnaries...</p>}
          {error && <p>Error: {error.message}</p>}
          {!loading && !error && dictionnaries && <div>
            {dictionnaries.map(dict => (
              <Button
                key={dict.uid}
                onClick={() => setSelectedDictionnary(dict)}>
                {dict.name}
              </Button>
            ))}
          </div>}
        </div>}
      {props.user && selectedDictionnary &&
        <div>
          <DictionnaryComponent
            user={props.user}
            dictionnary={selectedDictionnary} />
          <Button
            onClick={() => setSelectedDictionnary(undefined)}
          >Go back</Button>
        </div>}
    </div>
  );
}
