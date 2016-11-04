$( document ).ready(function() {

  function getCurrentYear() {
    return new Date().getFullYear();
  }

  function baseUrl() {
    return "http://localhost:3000/";
  }

  /**
   * Update copyright year
   */
  $('#copyright').html(getCurrentYear());

  /**
   * Firebase Auth
   */
  var auth = firebase.auth();

  auth.onAuthStateChanged((user) => {});

  $('#submit').on('click', function() {
    var e = $('#email').val();
    var p = $('#password').val();

    auth.signInWithEmailAndPassword(e, p).then(() => {
      window.location.href = baseUrl() + "main";
    }).catch((err) => {
      console.log(err);
    });
  });

  $('#logout').on('click', () => {
    auth.signOut();
    window.location.href = baseUrl();
  });

  /**
   * Firebase Database
   */
  var db = firebase.database();

/*
  var topPerson; // Used to remove the top user on the queue
  var count = 0;

  var tmp = [];

  db
  .ref('school/Lehman/office')
  .child('queue')
  .orderByChild('dateAdded')
  .on('value', (snapshot) => {
    $('').empty();
    $.each(snapshot.val(), (k, v) => {
      tmp.push(v); 
    });

    tmp.sort((d1, d2) => {
      d1 = new Date(d1.dateAdded);
      d2 = new Date(d2.dateAdded);
      return d1 - d2;
    });

    $.each(tmp, function(k, v) {
      var name = v.name;
      var date = moment(v.dateAdded).format("MMM Do YYYY");
      $('').append(
        '<div class="">' +
          '<p class="name">' + name + '</p>' + 
          '<p class="date">' + date + '</p>' +
        '</div>'
      );
    });
  });
*/
});
