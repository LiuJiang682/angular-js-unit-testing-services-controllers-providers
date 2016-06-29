angular.module('factory', [])
  .factory('apiToken', ['$window', 'clientId', function apiTokenFactory($window, clientId) {
      var encrypt = function(data1, data2) {
          return (data1 + ':' + data2).toUpperCase();
      };

      console.log($window.localStorage);
    //   var secret = $window.localStorage.getItem('myApp.secret');
    var secret = '123';
      var apiToken = encrypt(clientId, secret);

      return apiToken;
  }]);