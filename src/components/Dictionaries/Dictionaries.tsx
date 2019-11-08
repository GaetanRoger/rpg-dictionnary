
import React, { useState } from 'react';
import { Login } from '../Login/Login';
import { Button, makeStyles, Grid, IconButton, } from '@material-ui/core';
import { Dictionary as DictionaryComponent } from '../Dictionary';
import { Dictionary } from '../../models/dictionary';
import { User as AppUser } from '../../models/user';
import { useCollectionData } from '../../helpers/hooks/use-collection-data';
import { FirestoreCollectionQueryBuilder as QueryBuilder } from '../../helpers/firestore-collection-query-builder';
import { AppBar } from '../AppBar';
import AddOutlined from '@material-ui/icons/AddOutlined'
import { Pane } from 'evergreen-ui';

type DictionariesProps = {
  user: AppUser;
};

export function Dictionaries(props: DictionariesProps) {
  const firestoreQuery = QueryBuilder.collection('dictionaries').ownedBy(props.user.uid).build();
  const [dictionaries, loading, error] = useCollectionData<Dictionary>(firestoreQuery);

  const [selectedDictionary, setSelectedDictionary] = useState<Dictionary | undefined>(undefined);

  return (
    <Pane background="tint2" minHeight="100vh">
      <AppBar onDictionaryChange={d => setSelectedDictionary(d)} />
      {!selectedDictionary &&
        <div>
          {loading && <p>Loading dictionaries...</p>}
          {error && <p>Error: {error.message}</p>}
          {!loading && !error && dictionaries &&
            <Grid container style={{ margin: '10px 0' }} justify='flex-start' alignItems='center'>
              <Grid item xs={2}>
                <IconButton color='secondary'> 
                  <AddOutlined />
                </IconButton>
              </Grid>
              {dictionaries.map(dict => (
                <Grid item xs={2} key={dict.uid}>
                  <Button 
                    onClick={() => setSelectedDictionary(dict)}
                    size='large'
                    variant="outlined">
                    {dict.name}
                  </Button>
                </Grid>
              ))}
            </Grid>}
        </div>}
      {selectedDictionary &&
        <div>
          <DictionaryComponent
            user={props.user}
            dictionary={selectedDictionary} />
          <Button
            onClick={() => setSelectedDictionary(undefined)}
          >Go back</Button>
        </div>}
    </Pane>
  );
}

const useStyles = makeStyles(() => ({

}));

