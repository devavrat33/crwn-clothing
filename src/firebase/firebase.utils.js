import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyChwWVmPZPQ2OYK9IMM477zkgr-Q1me5KQ",
    authDomain: "crwn-db-55433.firebaseapp.com",
    databaseURL: "https://crwn-db-55433.firebaseio.com",
    projectId: "crwn-db-55433",
    storageBucket: "crwn-db-55433.appspot.com",
    messagingSenderId: "845166485464",
    appId: "1:845166485464:web:2401c2d4794654bb6f9cad",
    measurementId: "G-WNQP00DJWL"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

    //  console.log(snapShot);

      if(!snapShot.exists){
            const { displayName, email } = userAuth;
            const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
      }

      return userRef;
       
  }

  firebase.initializeApp(config);


  export const addCollectionAndDocuments = async  (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);
      });

    return await  batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections)=> {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items} = doc.data();

        return {
            routeName : encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items

        };
    });
    return transformedCollection.reduce((accumulator, collection ) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;




   