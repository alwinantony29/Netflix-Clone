import React, { useState } from 'react'
import "./NavBar.css"
import { provider } from "../../Firebase/firebaseconfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {  signOut } from "firebase/auth";
import {  onAuthStateChanged } from "firebase/auth";
function NavBar() {
  const [photo, setPhoto] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAB7CAMAAACfDCSHAAAAaVBMVEX///8zMzMdHR3o6Oj8/PwwMDAtLS0lJSX5+fkoKCjs7OwiIiLg4ODU1NRwcHC1tbXMzMzBwcEVFRWFhYWMjIypqamVlZVBQUE8PDyhoaFJSUm7u7tYWFibm5tjY2MMDAx9fX1QUFAAAAButyN1AAAD7klEQVRoge2aa3ejKhRAARERQUDBRI1pMv//Rw5q0mbS+EgH5t4P7NXVmkfdOXgOLwNAJBKJRCKRSOT/BuXa2tZqTqeHOLhP112KUOFIu1rT4FLcX4uMpHAiJVlx7QMHyc8VgX9AqjMPpnPR9GkOv5Gn2r0YKFZbpd+Nrn0/bBjfaHwlHKlkmAzSaMkIIVIhnAy+bNVb2x6ZfyO4ZMtGCLPav1G8yNVHiPCuvGwo84tvIzuuGwNczb7YUMKi96ysN9rVtazvBDqsVMitZQ+elZvt6lrWr5Et9nVfVNSjEO9T+kzZ/0C5r2GRT6XUdGUU+VRS7a00xa+q3qwRR1398tXRNhnc7AhGclg0foy4JNu6m7T0M1Dj824lOXtS7o/Sl3JHl/7ZsL66drujQmaQr9ml2NEPzFS+igRvj1w3Om8zy+U581OQ1ttsFndkbRI7QyC5Un/rvoTk1w1j2mXE6xKMJnyjOAlPPMY4S9dzKD34nBPcKFc7hLz0bwR6NW0rHUDJjv985bW69Aqx8HLoNaUKoqSnxTohpwD5OiIXEwj5XgLdod1CApEuUJAY6I/Xyo8gmxMzl5eroUDpOoJf74qkaZCanJUWcPTNmSIObLB2PVugiudtw1wBG6KDnSmRBuL4eD3T4ihAjwIqSSUBq+E9UlLAmrlyDTKM3JWwMhRw0+XIkXcNB7RGkARVwuwgXd1zpbVy8w4qD66dAythWh2NGicdNFHmOO3Q3pUB8va+OMmqAh6PEFXFXDKhoqQseVyCpelXhZJzwqjPEClX1lzOB/Jckg/FWZDDqTRW8b/u3ynv69OBZHmek/W5c5qSPM8yZ677H3nHRqJCll2Gsg3Xs5q4f+lKKd7WUmVOBGVv2R68OSJXo96x8qFz0f1Md8dF2w18Z+HwC/k+XvwoWETq7WUKHjuw1X379yhQvTqYjjeRVL5jG3QnU1MV+cZ8c3kS93OxG31WUIWXi/jkLNbiPO3ebnmH/LRs5B8oCNVy3tIkEIFm1pFIJBKJRCKRSOTfgAFmt1W3O8Tz9xfH32x+YnoJ3/7O7/prI6DT1xIEm76O6h5zPj3b/nlyDCwXDVc94L0wrFe4ZdbowYrmvZvEGLCG14MS0thSt4NurW7bvhWtHiTFVveDMG3DgAC4dSe3WlLb17iVmg0MSM4a2b57K5z2ahCNGnrWcqMtVb0SAy01KC1ILDbjObUC2kUvkougWja1AS1zTzE6ACVa9Z7SRTloK5QxSlptraZjhH0jGqmlSlopjdDuQ4yX0xgmgbwkVOs6aWt+sYon51abULdrbnnl4URTkuL5hF8Hn8dTBs8/4Hb4Kb69tvwpfgNQVzYcTHBvIAAAAABJRU5ErkJggg==')

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('authchanged',user.displayName);
    setPhoto(user.photoURL)
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    console.log('authchanged no user');
    // User is signed out
    // ...
  }
});
const signIn=()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errors are ',errorCode,errorMessage);
    // The email of the user's account used.
    const email = error.customData.email;
    console.log('email used: ',email);
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });}
  return (
    <div className='navbar'>
        <img onClick={()=>{
          signOut(auth).then(() => {
            // Sign-out successful.
            console.log('sign out succesfull');
          }).catch((error) => {
            // An error happened.
            console.log('signOut error :',error);
          });
        }} className='logo' src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" />
        <img onClick={signIn} className='avatar' src={photo} alt="avatar" />
       
    </div>
  )
}

export default NavBar