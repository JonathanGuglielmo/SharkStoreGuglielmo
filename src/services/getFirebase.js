import firebase from "firebase"

import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAdaNHNewIdenH1bMk60Q3ZXD-ECUXtM90",
    authDomain: "sharkstore.firebaseapp.com",
    projectId: "sharkstore",
    storageBucket: "sharkstore.appspot.com",
    messagingSenderId: "922895355823",
    appId: "1:922895355823:web:3f63903c1762e8fab4a95a"
};

const app = firebase.initializeApp(firebaseConfig)

// export function getFirebase(){
// return app    
// }

export function getFirebase(){
    return firebase.firestore(app)
}