import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('b-portion', 'Integration | Component | b portion', {
  integration: true
});

const portionStub = Ember.Object.create({
  cost: 42,
  text: 'hi',
  paid: false,
  save() {},
  updateOrderMoney() {}
});

test('should render portion', function(assert) {
  this.set('portion', portionStub);
  this.render(hbs`{{b-portion portion=portion}}`);

  assert.equal(this.$('.b-portion__cost').text(), '42');
  assert.equal(this.$('.b-portion__text').text(), 'hi');
});

test('should toggle paid status', function(assert) {
  this.set('portion', portionStub);
  this.render(hbs`{{b-portion portion=portion}}`);
  this.$('input').click();

  assert.ok(this.get('portion.paid'));
});
