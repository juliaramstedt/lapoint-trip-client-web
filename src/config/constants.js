import firebase from 'firebase'
import firestore from 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyB1ErMUuIqSCYpeKplYR-yvHhQqiINsG-w',
  authDomain: 'hackweek-lapoint.firebaseapp.com',
  projectId: 'hackweek-lapoint',
  databaseURL: 'https://hackweek-lapoint.firebaseio.com'
}

firebase.initializeApp(config)

export const databaseRef = firebase.database().ref()
export const db = firebase.firestore()
export const firebaseAuth = firebase.auth
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
