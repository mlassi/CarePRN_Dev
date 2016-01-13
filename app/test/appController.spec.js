describe('--The functionality of the app controller', function(){

var appController;

beforeEach(module('CarePRN'));

beforeEach(inject(function($rootScope, $controller){
  var scope=$rootScope.$new();
  appController = $controller('appController', {
    $scope: scope
  });
}));


  describe('Initialization of Controller and values', function(){
    it('should have a controller defined', function(){
        expect(appController).toBeDefined();
    })
  });

})
