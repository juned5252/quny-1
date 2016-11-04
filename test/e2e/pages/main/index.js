module.exports = {
  url: function () {
    return this.api.launch_url + '/';
  },
  elements: {
    loginBtn: { selector: 'a.btn.btn-primary' }
  }
};