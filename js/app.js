'use strict';

// Declare app level module which depends on filters, and services
// angular.module('FEBG', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
angular.module('FEBG', [
    'FEBG.directives', 'FEBG.controllers'
]).
config([
    '$routeProvider', function ($routeProvider) {

		var i, route;

		for(i in CONS.routes){
			route = CONS.routes[i];
			$routeProvider.when(route.url, {
				templateUrl: 'partials/' + route.template,
				controller: route.id
			});
		}
        $routeProvider.otherwise({
            redirectTo: CONS.routes.members.url
        });
    }
]);
