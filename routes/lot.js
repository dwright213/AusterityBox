AusterityBox.LotRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('lot');
  }
})
