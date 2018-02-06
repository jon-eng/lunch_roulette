App.Views.Uber = Backbone.View.extend({

  initialize: function(){
    this.template = HandlebarsTemplates['uber'];
    this.render();
  },
  render: function() {
    console.log(this.model)
    this.$el.html(this.template(this.model.toJSON()));
  }
});