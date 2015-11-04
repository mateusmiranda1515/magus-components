
function MagusAddress(){
	return{
		restrict: 'E',
		scope: {

		},
		link: function(scope, elem, attrs){
			console.log('jesus')
		}
	}
}


angular.module('magus.directives.address', []).directive('magusAddress', MagusAddress);