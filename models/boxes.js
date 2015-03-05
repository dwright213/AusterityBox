AusterityBox.Box = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  lots: DS.hasMany('lot', {async: true})
});
