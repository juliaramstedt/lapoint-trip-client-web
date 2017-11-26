import { databaseRef, firebaseAuth } from '../config/constants'

export function auth (email, password) {
  return firebaseAuth().createUserWithEmailAndPassword(email, password)
    .then(saveUser)
}

export function login (email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password)
}

export function externalAuth (provider) {
  return firebaseAuth().signInWithPopup(provider).then(function (response) {
    console.log('authentication successful')
  }).catch(function (error) {
    console.log('authentication failed', error.code, error.message)
  })
}

export function logout () {
  return firebaseAuth().signOut().then(function() {
    console.log('successful sign-out')
  }).catch(function (error) {
    console.log('sign-out failed', error.code, error.message)
  })
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (response) {
  return databaseRef.child(`users/${response.uid}/info`)
    .set({
      email: response.email,
      uid: response.uid
    })
    .then(() => response)
}
