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
  });
});
