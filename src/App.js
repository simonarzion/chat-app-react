import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useEffect, useState } from "react";
import Logged from "./components/Logged";
import Logout from "./components/Logout";

function App() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp({
      apiKey: "AIzaSyACkLPaUim5bO8XaYFaEl8FjL_OJYBwKWc",
      authDomain: "chat-app-react-d283b.firebaseapp.com",
      projectId: "chat-app-react-d283b",
      storageBucket: "chat-app-react-d283b.appspot.com",
      messagingSenderId: "813449105916",
      appId: "1:813449105916:web:56e5b12d90bbeae4ff6279",
    });
  }

  const db = firebase.firestore();

  const auth = firebase.auth();
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsuscribe;
  });

  const provider = new firebase.auth.GoogleAuthProvider();

  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log("logged in");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    try {
      console.log("logged out");
      firebase.auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>Firebase / React Chat App</h1>
      {user ? (
        <Logged logOut={logOut} user={user} db={db} />
      ) : (
        <Logout signIn={signIn} />
      )}
    </>
  );
}

export default App;
