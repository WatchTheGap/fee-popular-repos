(function() {
  'use strict';

  angular.module('gh')
    .filter('mbConvert', mbConvert);

    function mbConvert() {

      return function convertToMB(size, suffix = '') {
        return (size * 0.001) + suffix;
      };

    }

}());
