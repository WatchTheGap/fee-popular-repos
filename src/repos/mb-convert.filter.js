(function() {
  'use strict';

  angular.module('gh')
    .filter('mbConvert', mbConvert);

    /**
     * Creates a filter to change the format of a file size
     * @return {function} The function that specifies the style of the size format
     */
    function mbConvert() {

      /**
       * Converts the size of a repo to a new format
       * @param  {Number} size        The size of the repo in kilobytes
       * @param  {String} [suffix=''] The suffix to append to the number
       * @return {String}              
       */
      return function convertToMB(size, suffix = '') {
        return (size * 0.001) + suffix;
      };

    }

}());
