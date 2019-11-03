import firebase from '../firebase';


export class FirestoreCollectionQueryBuilder {
    private userId?: string;

    private constructor(private collectionName: string) { }

    static collection(name: string): FirestoreCollectionQueryBuilder {
        return new FirestoreCollectionQueryBuilder(name);
    }

    ownedBy(userId: string): this {
        this.userId = userId;
        return this;
    }




    build(): firebase.firestore.Query {
        return firebase.firestore()
            .collection(this.collectionName)
            .where('user.uid', '==', this.userId)
    }
}