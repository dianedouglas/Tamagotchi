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
    if(this.foodLevel && (this.sleepLevel || this.activityLevel)) {
      return true;
    } else {
      return false;
    }
  }
};
