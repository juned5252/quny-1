module.exports = {
  url: function () {
    return this.api.launch_url + '/';
  },
  elements: {
    title: {
      selector: 'h1#title'
    }
  }
};