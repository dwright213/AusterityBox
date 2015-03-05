AusterityBox.LotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('name'),
        description: this.get('description'),
        date: this.get('date'),
      });
    }
  }
});
