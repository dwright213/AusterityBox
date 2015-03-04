AusterityBox.BoxesRoute=Ember.Route.extend({
  controllerName: 'boxes',
  renderTemplate: function(){
    this.render('boxes');
  },
  model: function(){
    return this.store.find('box');
  }
})
