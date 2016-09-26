module.exports = {
  'Test Index Page' : function (client) {
    var page = client.page.index();

    page
      .navigate()
      .assert.containsText('body', 'Express');

    client.end();
  }
};
