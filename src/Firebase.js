import * as firebase from 'firebase'
import firebaseui from 'firebaseui'
import { firebaseAuth } from '../config/constants'

// let database

export const firebaseInit = () => {
  let config = {
    apiKey: 'AIzaSyB1ErMUuIqSCYpeKplYR-yvHhQqiINsG-w',
    authDomain: 'hackweek-lapoint.firebaseapp.com',
    databaseURL: 'https://hackweek-lapoint.firebaseio.com',
    storageBucket: 'hackweek-lapoint',
    messagingSenderId: '527742188738'
  }
  firebase.initializeApp(config)
  // database = firebase.database()
}

export const firebaseUIInit = () => {
  let config = {
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    tosUrl: '<your-tos-url>'
  }
  let ui = new firebaseui.auth.AuthUI(firebase.auth())
  ui.start('#firebaseui-auth-container', config);
}

export default firebaseInit
