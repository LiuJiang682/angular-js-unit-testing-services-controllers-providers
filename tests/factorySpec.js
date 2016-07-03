describe('factory tests', function() {
    var mockWindow, sampleFactoryObj;
    var store = {'myApp.secret' : '123'};

    beforeEach(function() {
    	
        module(function($provide) {
            $provide.service('$window', function() {
                this.localStorage = jasmine.createSpy('localStorage');
                console.log(this.localStorage);
                this.localStorage.getItem = function(key) {
                	console.log("inside getItem function")
//                	return '123';
                }
                spyOn(this.localStorage, 'getItem').and.callFake(function (key) {
                	console.log(key);
                	if (key) {
                		console.log("inside getItem callFake");
                		return store[key];
                	}
                });
            });

            $provide.value('clientId', 'a12345654321x');
        });

        module('factory');
    });

    beforeEach(inject(function($window, apiToken){
        mockWindow = $window;
        sampleFactoryObj = apiToken;
    }));

    it('should be encryt', function() {
        console.log(sampleFactoryObj);
        expect(sampleFactoryObj).toEqual('A12345654321X:123');

         expect(mockWindow.localStorage.getItem).toHaveBeenCalledWith('myApp.secret');
    });
});