module.exports = {
  'Test Index Page' : function (client) {
    var page = client.page.index();

    page.navigate().assert.title('Friendly Stuff');
    page.navigate().expect.element('@title').to.be.present;
    page.navigate().assert.containsText('@title', 'Friendly Stuff');
    
    client.end();
  }
};
