App.Views.Ubers = Backbone.View.extend({

  el: '#uber-container',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.render);


  },

  renderAll: function() {
    this.$('#uber-display').empty();
    this.collection.each(this.render, this)
  },

  render: function(uber) {
    this.$('#uber-display').append(new App.Views.Uber({ model: uber }).$el)
  },

})