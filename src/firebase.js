import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyBHjAkDsX8FqTTzjTuQY1QDhpZLICDBqY0',
  authDomain: 'abl-security-b033d.firebaseapp.com',
  projectId: 'abl-security-b033d',
  storageBucket: 'abl-security-b033d.appspot.com',
  messagingSenderId: '151786772349',
  appId: '1:151786772349:web:c8403bde391b3fb9f11e14',
  measurementId: 'G-S0GH260NF6'
};

initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getTokenAndUpdate = (setTokenFound) => {
  return getToken(messaging, { vapidKey: 'BHqs-fraGSU0opcrpaMbqpVtgfwqA0HOuvRYUauIc4J_DSmx_CN-nFmRIa-v7gDbeOoMFdLR9-nCFqID_iYeaEY' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        //console.log(currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        console.log('no Token');
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
};
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);
