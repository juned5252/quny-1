module.exports = {
  'Test Index Page' : function (client) {
    var page = client.page.index();

    page.navigate().assert.title('Friendly Stuff');

    client.end();
  }
};
