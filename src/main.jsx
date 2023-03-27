import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB6FaUmliQ5OnZHfkmM5mitoA6Mxb2P0io",
    authDomain: "react-proyect-4b003.firebaseapp.com",
    projectId: "react-proyect-4b003",
    storageBucket: "react-proyect-4b003.appspot.com",
    messagingSenderId: "700380776416",
    appId: "1:700380776416:web:52cfe4810b27d31fdacd85"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)
