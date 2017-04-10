(function() {
  'use strict';

  angular.module('gh')
    .directive('repos', repos);


    /**
     * Creates the repos directive
     * @return {Object} Object containing the template and scope of the directive
     */
    function repos() {

      return {
        templateUrl: 'repos/panel.template.html',
        restrict: 'A',
        scope: {
          repo: '=repo',
          list: '='
        }
      };

    }


}());
