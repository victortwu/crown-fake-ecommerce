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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if ( !userAuth ) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = await userRef.get()
    //console.log(userRef)
    if ( !snapShot.exists ) { // <-- if no user exists, create a new one
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef // <-- if user ALREADY exists, just return it
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase