App.Views.Bar = Backbone.View.extend({

  initialize: function(){
    this.template = HandlebarsTemplates['bar'];
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  //when uber estimate button is clicked run getUberEstimate function
  events: {
    'click #uber-estimate': 'getUberEstimate'
  },

  getUberEstimate: function(){
    //grab value stored in hidden value in template with id of start-lat
    var startLat = this.$('#start-lat').val();
    //grab value stored in hidden value in template with id of start-lng
    var startLng = this.$('#start-lng').val();
    //grab value stored in hidden value in template with id of end-lat
    var endLat = this.$('#end-lat').val();
    //grab value stored in hidden value in template with id of end-lng
    var endLng = this.$('#end-lng').val();

    //set query as array of variables stored above
    var query = [startLat, startLng, endLat, endLng]

    //get request to uber search endpoint
    $.ajax({
      url: '/ubers/search',
      method: 'GET',
      data: {
        query: query
      },
      reset: true
    }).done(function(ubers) {
      //once the uber models are retrieved 
      //empty the display and set the collection with those models
      $("#uber-display").empty();
      App.ubersView.collection.reset(true);
      App.ubersView.collection.set(ubers);

    })

    //set model to json format
    model = this.model.toJSON();
    
    var newMap = new App.Views.Map({ model: model})
    
  }

});
