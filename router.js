AusterityBox.Router.map(function() {
  this.resource('about', {path: '/'});
  this.resource('box', {path: 'boxes/:box_id'});
  this.resource('boxes');
  this.resource('new-box');
  this.resource('lot');
});
