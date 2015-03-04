AusterityBox.Router.map(function() {
  this.resource('about');
  this.resource('lot');
  this.resource('boxes', {path: '/'});
  this.resource('new-box');
});
