var Tamagotchi = {
  initialize: function(initializedName) {
    this.name = initializedName;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  timePasses: function(){
    this.foodLevel = this.foodLevel - 1;
  }
};
