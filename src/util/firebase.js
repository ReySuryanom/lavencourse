import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAIJksQjyUSNxPMA-Y1Nd6pdb53sL-wqtE',
  authDomain: 'lavencourse.firebaseapp.com',
  databaseURL: 'https://lavencourse-default-rtdb.firebaseio.com',
  projectId: 'lavencourse',
  storageBucket: 'lavencourse.appspot.com',
  messagingSenderId: '323001716200',
  appId: '1:323001716200:web:f0595de4ccdeb6d0f4285d',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export { auth, googleProvider }
export default firebase
