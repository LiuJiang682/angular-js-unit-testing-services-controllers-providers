angular.module('services', [])
  .service('sampleSvc', ['$window', 'modalSvc', function($window, modalSvc){
    this.showDialog = function(message, title){
      if(title){
        modalSvc.showModalDialog({
          title: title,
          message: message
        });
      } 
      else if (message) {
        $window.alert(message);
      }
      else {
        $window.alert("You are an idiot");
      }
    };
  }]);
