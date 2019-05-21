import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCsvDGYcZdazFw3SfpJQjfGWMdeTeuFsY8",
  authDomain: "planning-tool-cbbeb.firebaseapp.com",
  databaseURL: "https://planning-tool-cbbeb.firebaseio.com",
  projectId: "planning-tool-cbbeb",
  storageBucket: "planning-tool-cbbeb.appspot.com",
  messagingSenderId: "441571662914"
};
firebase.initializeApp(config);

const db = firebase.firestore();
const userRef = db.collection("users");

/*Authenticartion*/
export const signup = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(r => {
      const user = {
        uid: r.user.uid,
        email: r.user.email,
        username: r.user.displayName || r.user.email,
        photoURL: r.user.photoURL || "",
        type: "operations"
      };
      userRef
        .doc(r.user.uid)
        .set(user)
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
      return user;
    })
    .catch(e => {
      throw e;
    });
};

export const login = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(r => {
      return r;
    })
    .catch(e => {
      throw e;
    });
};

/*Login with Google*/

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      return res;
    })
    .catch(e => {
      throw e;
    });
};

export const logout = () => {
  return firebase
    .auth()
    .signOut()
    .then(r => {
      return r;
    })
    .catch(e => {
      throw e;
    });
};

export const checkIfUser = fun => {
  return firebase.auth().onAuthStateChanged(fun);
};

/* COntents Services*/

const contentRef = db.collection("contents");

//get All
export const getContents = () => {
  return contentRef
    .get()
    .then(res => {
      return res;
    })
    .catch(e => {
      throw e;
    });
};

export const getContentsByUser = userID => {
  return contentRef
    .where("userID", "==", userID)
    .get()
    .then(r => {
      return r;
    })
    .catch(e => {
      throw e;
    });
};

//get by ID
export const getContentById = id => {
  return contentRef
    .doc(id)
    .get()
    .then(r => {
      return r;
    })
    .catch(e => {
      throw e;
    });
};

//create
export const saveContent = obj => {
  if (!obj.id) {
    const id = contentRef.doc().id;
    obj["id"] = id;
  }
  return contentRef
    .doc(obj.id)
    .set(obj)
    .then(r => {
      return r;
    })
    .catch(e => {
      throw e;
    });
};

//upload Files
const contentFilesRef = firebase.storage().ref();

export const uploadFile = file => {
  const id = contentRef.doc().id;
  const task = contentFilesRef.child("contents/" + id).put(file);
  return task;
};
