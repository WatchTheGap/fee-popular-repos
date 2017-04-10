(function() {
  'use strict';

  angular.module('gh')
    .directive('repos', repos);

    function repos() {

      return {
        templateUrl: 'repos/panel.template.html',
        restrict: 'A',
        scope: {
          repo: '=',
          list: '='
        }
      };

    }


}());
