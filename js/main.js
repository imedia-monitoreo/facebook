window.addEventListener('load', function() {
  var loginBtn = document.getElementById('log-in');

  loginBtn.addEventListener('click', facebookLogin);

  function facebookLogin() {
    provider = new firebase.auth.FacebookAuthProvider();

    provider.setCustomParameters({
        'display': 'popup'
    });

    firebase.auth().signInWithPopup(provider)
      .then((result) => {
          // The signed-in user info.
          var user = result.user;
          // Mostramos su contenido
          console.log(user);
          // Llamamos a la funcion
          saveData(result.user);
          window.location.assign('view/dashboard.html');
      })
  }

  function saveData(user) {
    var users = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    };
    firebase.database().ref('bd/' + user.uid).set(users);
  }
})