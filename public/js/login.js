const config = {
    apiKey:            "",
    authDomain:        "",
    databaseURL:       "",  
    projectId:         "",
    storageBucket:     "",
    messagingSenderId: ""
  };
  firebase.initializeApp( config );

  const database  = firebase.database();
  const errorCode = error.code;
  const errorMsg  = error.message;

  $('.clickEvent').on("click", () => {
      event.preventDefault();
      console.log('Made it to log in \n');

      let provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then( data => {
          let credToken = result.credential.accessToken;
          let user      = result.usr;

          console.log(usr, credToken);
      }).catch ( error => {
          errorCode, errorMsg;
          console.log(errorCode, '\n\n', errorMsg);
      })

  })