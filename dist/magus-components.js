

function MagusAddress(){
	return{
		restrict: 'E',
		template: '',
		scope: {

		},
		link: function(scope, elem, attrs){

		}
	}
}

function MagusAlert(){
	return{
          restrict: 'E',
          scope: {
              type: '@',
              title: '@',
              message: '@',
              confirmation: '=',
              confirmButtonText: '@',
              cancelButtonText: '@',
              responseConfirm: '&'
          },
          link: function (scope, elm, attrs) {
              //VALUES DEFAULT
              scope.type = scope.type || 'none';
              scope.confirmation = scope.confirmation || false;
              scope.confirmButtonText = scope.confirmButtonText || 'Yes, confirm!';
              scope.cancelButtonText = scope.cancelButtonText || 'No, cancel plx!';

              if (scope.type === 'none') {
                  swal(scope.message);
              } else {
                  if (scope.type && scope.title && scope.message) {
                      if (scope.confirmation) {
                          swal({title: scope.title, text: scope.message,
                              type: scope.type, showCancelButton: true,
                              confirmButtonColor: "#DD6B55", confirmButtonText: scope.confirmButtonText,
                              cancelButtonText: scope.cancelButtonText,
                              closeOnConfirm: true,
                              closeOnCancel: true},
                          function (isConfirm) {
                              scope.responseConfirm({param: isConfirm});
                          });
                      } else {
                          swal(scope.title, scope.message, scope.type);
                      }
                  } else {
                      throw "Please enter the values: type, title and message.";
                  }
              }
          }
        };
}

angular.module('magus.directives', [])
		.directive('magusAddress', MagusAddress)
		.directive('magusAlert', MagusAlert);
