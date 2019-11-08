
import React from 'react';
import { DictionaryEntry } from '../models/dictionary-entry';
import { Dictionary as DictionaryType } from '../models/dictionary';
import { User } from '../models/user';
import { FirestoreCollectionQueryBuilder as QueryBuilder } from '../helpers/firestore-collection-query-builder';
import { useCollectionData } from '../helpers/hooks/use-collection-data';


type DictionaryProps = {
  user: User;
  dictionary: DictionaryType;
};

export function Dictionary(props: DictionaryProps) {
  const query = QueryBuilder.collection('dictionary-entries')
    .ownedBy(props.user.uid).build()
    .where('dictionary.uid', '==', props.dictionary.uid);

  const [entries, loading, error] = useCollectionData<DictionaryEntry>(query);

  return (
    <div className="App">
      {props.user && <div>
        <h1>{props.dictionary.name}</h1>
        {loading && <p>Loading dictionary entries...</p>}
        {error && <p>Error: {error.message}</p>}
        {!loading && !error && entries && <div>
          <p>Entries:</p>
          <ul>
            {entries.map(entry => (
              <li key={entry.uid}>{entry.source.english}: {entry.translation}</li>
            ))}
          </ul>
        </div>}
      </div>}
    </div>
  );
}
