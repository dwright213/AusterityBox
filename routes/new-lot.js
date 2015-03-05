AusterityBox.NewLotsRoute=Ember.Route.extend({
  model: function(){
    return this.store.find('new-lot');
  }
})
