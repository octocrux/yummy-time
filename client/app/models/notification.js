import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  order: DS.belongsTo('order')
});
