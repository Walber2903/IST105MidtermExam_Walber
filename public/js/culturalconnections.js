console.log('Iniciando authStateListener');
function authStateListener() {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    console.log('Auth State Changed:', user);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      signOut();
      location.href = 'index.html';
    }
  });
  // [END auth_state_listener]
}

window.addEventListener('load', function () {

  //Listen for auth state changes
  authStateListener();

  document.getElementById('sign-out').addEventListener('click', function () {
    signOut();
    // location.href = 'index.html';
  });


});

function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
}