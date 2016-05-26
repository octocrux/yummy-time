import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  manager: DS.belongsTo('account'),
  order: DS.belongsTo('order')
});
