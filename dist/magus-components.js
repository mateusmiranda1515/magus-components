

function MagusAddress(){
	return{
		restrict: 'E',
		template: '',
		scope: {

		},
		link: function(scope, elem, attrs){
			console.log('jesus')
		}
	}
}


angular.module('magus.directives', [])
		.directive('magusAddress', MagusAddress);
