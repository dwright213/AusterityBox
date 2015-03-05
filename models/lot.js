AusterityBox.Lot = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  date: DS.attr(),
  box: DS.belongsTo('box', {async: true})
});
