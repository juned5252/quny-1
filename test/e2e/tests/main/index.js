module.exports = {
  'Test Index Page' : function (client) {
    var page = client.page.main.index();

      page.navigate().assert.title('Quny | Login');

    client.end();
  }
};
