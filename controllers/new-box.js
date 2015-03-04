AusterityBox.NewBoxController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  actions: {
    save: function() {
      var newBox = this.store.createRecord('box', {
        name: this.get('name'),
        description: this.get('description')
      });
      newBox.save();
      this.transitionToRoute('boxes');
    }
  }
});
