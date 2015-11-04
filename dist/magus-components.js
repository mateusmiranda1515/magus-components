

function MagusAddress(){
	return{
		restrict: 'E',
		template: '<h1>Aqui vem o MagusAddress</h1>',
		scope: {

		},
		link: function(scope, elem, attrs){
			console.log('jesus')
		}
	}
}


angular.module('magus.directives', [])
		.directive('magusAddress', MagusAddress);
