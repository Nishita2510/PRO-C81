import React, {Component} from 'react';
import { View ,Button} from 'react-native';

export default class LoginScreen extends Component{
    constructor(props) {
        super(props);
            this.state = {
              fontsLoaded: false,
            };
          }
        
    
        isUserEqual = (googleUser, firebaseUser) => {
            if (firebaseUser) {
              var providerData = firebaseUser.providerData;
              for (var i = 0; i < providerData.length; i++) {
                if (
                  providerData[i].providerId ===
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                  providerData[i].uid === googleUser.getBasicProfile().getId()
                ) {
                  // We don't need to reauth the Firebase connection.
                  return true;
                }
              }
            }
            return false;
          };
        
          onSignIn = (googleUser) => {
            // We need to register an Observer on Firebase Auth to make sure auth is initialized.
            var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
              unsubscribe();
              // Check if we are already signed-in Firebase with the correct user.
              if (!this.isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                var credential = firebase.auth.GoogleAuthProvider.credential(
                  googleUser.idToken,
                  googleUser.accessToken
                );
        
                // Sign in with credential from the Google user.
                firebase
                  .auth()
                  .signInWithCredential(credential)
                  .then(function (result) {
                    if (result.additionalUserInfo.isNewUser) {
                      firebase
                        .database()
                        .ref('/users/' + result.user.uid)
                        .set({
                          gmail: result.user.email,
                          profile_picture: result.additionalUserInfo.profile.picture,
                          locale: result.additionalUserInfo.profile.locale,
                          first_name: result.additionalUserInfo.profile.given_name,
                          last_name: result.additionalUserInfo.profile.family_name,
                          current_theme: 'dark',
                        })
                        .then(function (snapshot) {});
                    }
                  })
                  .catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                  });
              } else {
                console.log('User already signed-in Firebase.');
              }
            });
          };
    signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            behaviour: 'web',
            androidClientId:
              '240523802846-g3unstcr7e5bhdmh67188jek5p0r3j48.apps.googleusercontent.com',
            iosClientId:
              '240523802846-pn4hquq57r224a0j1fp0bp9ujfkm06p5.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
    
          if (result.type === 'success') {
            this.onSignIn(result);
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          console.log(e.message);
          return { error: true };
        }
      }
    }
