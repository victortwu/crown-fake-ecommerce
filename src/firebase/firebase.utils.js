import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyBJufmEfcpl8UiNrbK8_YRtGJZgD_MuFAo",
    authDomain: "fake-react-ecomm.firebaseapp.com",
    projectId: "fake-react-ecomm",
    storageBucket: "fake-react-ecomm.appspot.com",
    messagingSenderId: "455958630786",
    appId: "1:455958630786:web:c55b7e96be51fab0167f9b",
    measurementId: "G-N5K17LNS4N"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase