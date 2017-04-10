(function() {
  'use strict';

  angular.module('gh')
    .directive('repoDirective', repoDirective);

    function repoDirective() {

      return {
        templateUrl: 'repos/user-repos.template.js',
        restrict: 'E',
        scope: {

        }
      };

    }


}());
