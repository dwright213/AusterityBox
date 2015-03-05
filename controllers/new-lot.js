AusterityBox.NewLotController = Ember.Controller.extend({
  needs: ['box'],
  actions: {
    save: function() {
      var lot = this.store.createRecord('lot', {
        name: this.get('name'),
        description: this.get('description'),
        date: this.get('date'),
      });
      lot.save();

      var box = this.get('controllers.box.model');
      box.get('lots').pushObject(lot);
      box.save();
    }
  }
});
