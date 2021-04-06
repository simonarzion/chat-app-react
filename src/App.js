import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import ChatRoom from "./components/ChatRoom";
import Signin from "./components/Signin";
import Logout from "./components/Logout";

import { useAuthState } from "react-firebase-hooks/auth";

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

  const auth = firebase.auth();

  const [user] = useAuthState(auth);

  // SIGN IN
  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  // LOG OUT
  const logout = () => {
    auth.signOut();
  };

  return (
    <>
      <h1>Firebase / React Chat App</h1>
      {user ? (
        <div>
          <Logout logout={logout} />
          <ChatRoom />
        </div>
      ) : (
        <Signin login={login} />
      )}
    </>
  );
}

export default App;
