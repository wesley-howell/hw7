const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDbwQYuJrSk35NnjbVq45iavwg7uk3YWxs",
  authDomain: "kiei-451-34d25.firebaseapp.com",
  projectId: "kiei-451-34d25",
  storageBucket: "kiei-451-34d25.appspot.com",
  messagingSenderId: "284896199016",
  appId: "1:284896199016:web:9445b4fbb7a17d169f56dd"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase