var Tamagotchi = {
  initialize: function(initializedName) {
    this.name = initializedName;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
    displayStatus();
  },
  timePasses: function(){
    this.foodLevel -= 1;
    this.sleepLevel -= 1;
    this.activityLevel -= 1;
    displayStatus();
  },
  isAlive: function(){
    if ((this.sleepLevel <= 0) && (this.activityLevel <= 0)) {
      $(".dead").fadeIn();
      $(".interactions, .status, .info").hide();
      clearInterval(interval);
      return false;
    } else if (this.foodLevel > 0){
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
    displayStatus();
  },
  playing: function() {
    this.activityLevel += 1;
    displayStatus();
  },
  sleeping: function(){
    this.sleepLevel += 1;
    displayStatus();
  },
};

var gotchi;
var interval;
var displayStatus = function(){
  var foodStatus = $(".food");
  var sleepStatus = $(".sleep");
  var activityStatus = $(".activity");
  foodStatus.text(gotchi.foodLevel);
  sleepStatus.text(gotchi.sleepLevel);
  activityStatus.text(gotchi.activityLevel);
  if(gotchi.foodLevel <= 3){
    foodStatus.addClass('emergency-text');
  }else{
    foodStatus.removeClass('emergency-text');
  }
  if(gotchi.sleepLevel <= 3){
    sleepStatus.addClass('emergency-text');
  }else{
    sleepStatus.removeClass('emergency-text');
  }
  if(gotchi.activityLevel <= 3){
    activityStatus.addClass('emergency-text');
  }else{
    activityStatus.removeClass('emergency-text');
  }
  gotchi.isAlive();
}

$(document).ready(function(){
  $("form").submit(function( event ) {
    event.preventDefault();
    gotchi = Object.create(Tamagotchi);
    gotchi.initialize($("input#pet-name").val());
    $(".your-pet").text($("input#pet-name").val() + "!");
    $(".interactions").slideDown();
    $(".status").slideDown();
    $("form").hide();
    interval = setInterval(function(){ gotchi.timePasses()}, 1000);
  });
  $("#feeding").click(function(){
    gotchi.feeding();
  });
  $("#playing").click(function(){
    gotchi.playing();
  });
  $("#sleeping").click(function(){
    gotchi.sleeping();
  });
  $(".restart-button").click(function(){
    $(".dead").hide();
    $(".info").show();
    $("form").show();
    $(".your-pet").text("your new pet!");
    $("input#pet-name").val("");
  });
});
