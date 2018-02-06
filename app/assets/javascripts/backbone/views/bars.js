App.Views.Bars = Backbone.View.extend({

  el: '#bars-container',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.render);

  },

  renderAll: function() {
    this.$('#display').empty();

    this.collection.each(this.render, this)
  },

  
  render: function(bar) {
    this.$('#display').append(new App.Views.Bar({ model: bar }).$el)
  },

  //when search button is clicked, run searchForBar function
  events: {
    'click #search': 'searchForBar'
  },

  searchForBar: function() {

    //grab value put into near input box
    var near = this.$('#near').val();
    //grab value put into distance input box
    var distanceConverted = this.$('#distance').val();
    //grab value put into bar_price input box
    var bar_price = (this.$('#bar_price').val());

    //distance is input as miles is converted to meters  
    var distance = distanceConverted * 1609.34;
    //set query to be an array
    var query = [near, distance, bar_price];


    //fetch the data with the query set as the above array
    this.collection.fetch({
      data: {
        query: query
      },
      reset: true
    })
  //everytime you search for a new bar it removes the map
    this.$('#uber-display').empty();
    $('#map').empty().removeAttr('style');
    // console.log(this.collection)
  }
})