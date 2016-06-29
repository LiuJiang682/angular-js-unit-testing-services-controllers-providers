describe('factory tests', function() {
    var mockWindow, sampleFactoryObj;

    beforeEach(function() {
        module(function($provide) {
            $provide.service('$window', function() {
                this.localStorage = jasmine.createSpy('localStorage');
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

        // expect(mockWindow.localStorage).toHaveBeenCalled();
    });
});