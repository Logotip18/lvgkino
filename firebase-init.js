const firebaseConfig = {
    apiKey: "AIzaSyDeX86T2r1K0LRMEyk3UdUF68bfYiTwjiw",
    authDomain: "lvgkino.firebaseapp.com",
    projectId: "lvgkino",
    storageBucket: "lvgkino.firebasestorage.app",
    messagingSenderId: "526810546839",
    appId: "1:526810546839:web:aaf02cb3a91b31cd311fd2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
