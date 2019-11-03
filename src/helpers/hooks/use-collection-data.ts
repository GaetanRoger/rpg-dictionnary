import { useState, useEffect } from "react";
import { useCollection } from 'react-firebase-hooks/firestore';
import { FirestoreCollectionQueryBuilder } from "../firestore-collection-query-builder";

type UseCollectionDataQueryParameter = firebase.firestore.Query
    | FirestoreCollectionQueryBuilder
    | null
    | undefined;

type UseCollectionDataOptionsParameter = {
    snapshotListenOptions?: firebase.firestore.SnapshotListenOptions | undefined;
} | undefined;

type UseCollectionDataReturn<T> = [T[] | undefined, boolean, Error | undefined];

export function useCollectionData<T extends { uid: string }>(
    query?: UseCollectionDataQueryParameter,
    options?: UseCollectionDataOptionsParameter
): UseCollectionDataReturn<T> {
    const [values, setValues] = useState<T[] | undefined>(undefined);

    const actualQuery = query instanceof FirestoreCollectionQueryBuilder
        ? query.build() : query;

    const [snapshot, loading, error] = useCollection(actualQuery, options);

    useEffect(() => {
        if (!snapshot) {
            setValues(undefined);
        } else {
            const newValues = snapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() as T }));
            setValues(newValues);
        }
    }, [snapshot, loading, error]);

    return [values, loading, error];
}
