(function() {
  'use strict';

  angular.module('gh')
    .directive('repos', repos);


    /**
     * Creates the repos directive
     * @return {Object} Object containing the template and scope of the directive
     */
    function repos() {
      let $ = angular.element;

      return {
        templateUrl: 'repos/panel.template.html',
        restrict: 'EA',
        scope: {
          repo: '=repo'
        },
          link: setupCollapse
      };

      function setupCollapse(scope, element) {
        console.log('setting up collapse feature');
        $(element)
          .find('header')
          .on('click', function togglePanelBody() {
            $(element).find('section').toggleClass('hidden');
        });
      }

    }


}());
