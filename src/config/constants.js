import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB1ErMUuIqSCYpeKplYR-yvHhQqiINsG-w',
  authDomain: 'hackweek-lapoint.firebaseapp.com',
  databaseURL: 'https://hackweek-lapoint.firebaseio.com'
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
