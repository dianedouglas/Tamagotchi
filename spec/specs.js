describe("Tamagotchi", function(){
  describe("initialize", function(){
    it("sets up variables and methods for the tamagotchi object.", function(){
      var gotchi = Object.create(Tamagotchi);
      gotchi.initialize("Cher");
      gotchi.name.should.equal("Cher");
      gotchi.foodLevel.should.equal(10);
      gotchi.sleepLevel.should.equal(10);
      gotchi.activityLevel.should.equal(10);
    });
  });

  describe("timePasses", function() {
    it("should decrease the value of food by one", function() {
      var gotchi = Object.create(Tamagotchi);
      gotchi.initialize("Cher");
      gotchi.timePasses();
      gotchi.foodLevel.should.equal(9);
    });

    it("should decrease the value of sleep by one", function() {
      var gotchi = Object.create(Tamagotchi);
      gotchi.initialize("Cher");
      gotchi.timePasses();
      gotchi.sleepLevel.should.equal(9);
    });

    it("should decrease the value of activity by one", function() {
      var gotchi = Object.create(Tamagotchi);
      gotchi.initialize("Cher");
      gotchi.timePasses();
      gotchi.activityLevel.should.equal(9);
    });
  });

  describe("isAlive", function() {
    it("should return true if food is greater than 0", function() {
      var gotchi = Object.create(Tamagotchi);
      gotchi.initialize("Cher");
      gotchi.timePasses();
      gotchi.isAlive().should.equal(true);
    });

    it("should return false if food is less than or equal to 0.", function(){
      var gotchi = Object.create(Tamagotchi);
      gotchi.initialize("Sonny");
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.isAlive().should.equal(false);
    });

    it("should return true if food is greater than 0 and both sleep and activty are greater than 0", function() {
      var gotchi = Object.create(Tamagotchi);
      gotchi.initialize("Cher");
      gotchi.timePasses();
      gotchi.isAlive().should.equal(true);
    });

    it("should return false if food is less than or equal to 0 or both sleep and activity are less than or equal to 0.", function(){
      var gotchi = Object.create(Tamagotchi);
      gotchi.initialize("Sonny");
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.timePasses();
      gotchi.isAlive().should.equal(false);
    });

    it("should return true if food and sleep are greater than 0, but acitivty is 0", function(){
      var gotchi = Object.create(Tamagotchi);
      gotchi.foodLevel = 8;
      gotchi.sleepLevel = 8;
      gotchi.activityLevel = 0;
      gotchi.isAlive().should.equal(true);
    });

    it("should return true if food and activity are greater than 0, but sleep is 0", function(){
      var gotchi = Object.create(Tamagotchi);
      gotchi.foodLevel = 8;
      gotchi.sleepLevel = 0;
      gotchi.activityLevel = 8;
      gotchi.isAlive().should.equal(true);
    });

    it("should return false if food is 0, but sleep and activity are greater than 0", function(){
      var gotchi = Object.create(Tamagotchi);
      gotchi.foodLevel = 0;
      gotchi.sleepLevel = 8;
      gotchi.activityLevel = 8;
      gotchi.isAlive().should.equal(false);
    });
  });
  describe("feeding", function() {
    it("should add 1 food to foodLevel", function() {
      var gotchi = Object.create(Tamagotchi);
      gotchi.initialize("Gabe");
      gotchi.feeding();
      gotchi.foodLevel.should.equal(11);
    });
  });
  describe("playing", function() {
    it("should add 1 to activity level.", function(){
      var gotchi = Object.create(Tamagotchi);
      gotchi.initialize("Blake");
      gotchi.playing();
      gotchi.activityLevel.should.equal(11);
    });
  });
  describe("sleeping", function() {
    it("should add 1 to sleep level.", function(){
      var gotchi = Object.create(Tamagotchi);
      gotchi.initialize("Athena");
      gotchi.sleeping();
      gotchi.sleepLevel.should.equal(11);
    });
  });
});
