 App.Views.Map = Backbone.View.extend({

  el: "#map",

  initialize: function() {

    this.$el.empty()
    this.$el.css("display", "block")
    var MY_MAPTYPE_ID = 'custom_style';
    var featureOpts = [
      {
        stylers: [
          { hue: "#000000"},
          { saturation: -100},
          { lightness: -70},
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          { visibility: 'on' },
          { color: '#ffffff' },
          { weight: .2 }
        ]
      },
      {
        featureType: 'water',
        stylers: [
          { color: '#1FBAD6' }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
      {
        featureType: 'poi',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
      featureType: 'landscape',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
      featureType: 'administrative',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          { color: '#ffffff' },
          { weight: .2 }
        ]
      }
    ];

    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(this.model.start_lat, this.model.start_lng),
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      scrollwheel: false,
      mapTypeId: MY_MAPTYPE_ID
    };

    

    var styledMapOptions = {
      name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);


    this.map = new google.maps.Map(this.el, mapOptions);

    this.map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

    this.render();

  },

  render: function() {

    var endLatlng = new google.maps.LatLng(this.model.end_lat, this.model.end_lng);

    var startLatlng = new google.maps.LatLng(this.model.start_lat, this.model.start_lng);

    var startMarker = new google.maps.Marker({
      map: this.map,
      position: startLatlng,
      animation: google.maps.Animation.DROP
    });

    var endMarker = new google.maps.Marker({
      map: this.map,
      position: endLatlng,
      animation: google.maps.Animation.DROP
    });
    
    // var infoWindow = new google.maps.InfoWindow({

    //   content: location.name + "<p></p>" + "Rating: " + location.address + "<p></p>" + location.category
    // })
    // google.maps.event.addListener(marker, "click", function() {
    //   infoWindow.open(this.map, marker)
    // })
  }

}); 