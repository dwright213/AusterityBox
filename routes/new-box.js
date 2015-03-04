AusterityBox.NewBoxesRoute=Ember.Route.extend({
  controllerName: 'new_box',
  renderTemplate: function(){
    this.render('new_box');
  },
  model: function(){
    return this.store.find('new_box');
  }
})
