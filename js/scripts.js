var Tamagotchi = {
  initialize: function(initializedName) {
    this.name = initializedName;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  timePasses: function(){
    this.foodLevel -= 1;
    this.sleepLevel -= 1;
    this.activityLevel -= 1;
  },
  isAlive: function(){
    if ((this.sleepLevel <= 0) && (this.activityLevel <= 0)) {
      return false;
    } else if (this.foodLevel > 0){
      return true;
    } else {
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


$(document).ready(function(){
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
    if(!gotchi.isAlive()){
      $(".dead").fadeIn();
      $(".interactions, .status, .info").hide();
      clearInterval(interval);
    }
  }
  $("form").submit(function( event ) {
    event.preventDefault();
    gotchi = Object.create(Tamagotchi);
    gotchi.initialize($("input#pet-name").val());
    displayStatus();
    $(".your-pet").text($("input#pet-name").val() + "!");
    $(".interactions").slideDown();
    $(".status").slideDown();
    $("form").hide();
    interval = setInterval(function(){
      gotchi.timePasses();
      displayStatus();
    }, 1000);
  });
  $("#feeding").click(function(){
    gotchi.feeding();
    displayStatus();
  });
  $("#playing").click(function(){
    gotchi.playing();
    displayStatus();
  });
  $("#sleeping").click(function(){
    gotchi.sleeping();
    displayStatus();
  });
  $(".restart-button").click(function(){
    $(".dead").hide();
    $(".info").show();
    $("form").show();
    $(".your-pet").text("your new pet!");
    $("input#pet-name").val("");
  });
});
