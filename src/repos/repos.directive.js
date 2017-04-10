(function() {
  'use strict';

  angular.module('gh')
    .directive('repos', repos);

    function repos() {

      return {
        templateUrl: 'repos/panel.template.html',
        restrict: 'EA',
        scope: {
          repo: '=',
          list: '='
        }
      };

    }


}());
