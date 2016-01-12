describe('--The functionality of the app controller', function(){

var appController;

  beforeEach(function(){
    module('CarePRN');

    var $injector = angular.injector();
    appController = $injector.get('appController');
  });

  describe('Initialization of Controller and values', function(){

    it('should have a controller defined', function(){
        expect(appController).toBeDefined();
    })

  })

})
