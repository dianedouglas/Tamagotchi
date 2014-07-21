var Tamagotchi = {
  initialize: function(initializedName) {
    this.name = initializedName;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
    $(".food").text(this.foodLevel);
    $(".sleep").text(this.sleepLevel);
    $(".activity").text(this.activityLevel);
  },
  timePasses: function(){
    this.foodLevel -= 1;
    this.sleepLevel -= 1;
    this.activityLevel -= 1;
    $(".food").text(this.foodLevel);
    $(".sleep").text(this.sleepLevel);
    $(".activity").text(this.activityLevel);
    this.isAlive();
  },
  isAlive: function(){
    if(this.foodLevel && (this.sleepLevel || this.activityLevel)) {
      return true;
    } else {
      $(".dead").fadeIn();
      $(".interactions, .status, .info").hide();
      clearInterval(interval);
      return false;
    }
  },
  feeding: function(){
    this.foodLevel += 1;
  },
  playing: function() {
    this.activityLevel += 1;
  },
  sleeping: function(){
    this.sleepLevel += 1;
  },
};

var interval;

$(document).ready(function(){
  var gotchi;
  $("form").submit(function( event ) {
    event.preventDefault();
    gotchi = Object.create(Tamagotchi);
    gotchi.initialize($("input#pet-name").val());
    $(".your-pet").text($("input#pet-name").val() + "!");
    $(".interactions").slideDown();
    $(".status").slideDown();
    $("form").hide();
    interval = setInterval(function(){ gotchi.timePasses()}, 500);
  });
  $("#feeding").click(function(){
    gotchi.feeding();
    gotchi.timePasses();
  });
  $("#playing").click(function(){
    gotchi.playing();
    gotchi.timePasses();
  });
  $("#sleeping").click(function(){
    gotchi.sleeping();
    gotchi.timePasses();
  });
  $(".restart-button").click(function(){
    $(".dead").hide();
    $(".info").show();
    $("form").show();
    $(".your-pet").text("your new pet!");
    $("input#pet-name").val("");
  });
});
