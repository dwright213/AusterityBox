AusterityBox.PostRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('box', params.box_id);
  }
});
