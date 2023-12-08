importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
let firebaseConfig = {
    apiKey: "AIzaSyBHjAkDsX8FqTTzjTuQY1QDhpZLICDBqY0",
    authDomain: "abl-security-b033d.firebaseapp.com",
    projectId: "abl-security-b033d",
    storageBucket: "abl-security-b033d.appspot.com",
    messagingSenderId: "151786772349",
    appId: "1:151786772349:web:c8403bde391b3fb9f11e14",
    measurementId: "G-S0GH260NF6"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});