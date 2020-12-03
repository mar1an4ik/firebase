import firebase from "firebase";

const config={
    apiKey: "AIzaSyAZI9G4eu0ti6PAm3V-RMOEKwDfiKlP53M",
    authDomain: "testfirebase-960e8.firebaseapp.com",
    databaseURL: "https://testfirebase-960e8.firebaseio.com",
    projectId: "testfirebase-960e8",
    storageBucket: "testfirebase-960e8.appspot.com",
    messagingSenderId: "252075297129",
    appId: "1:252075297129:web:e429c63d1fd3c2c37115f8"
};
const fire =firebase.initializeApp(config);
export default fire;