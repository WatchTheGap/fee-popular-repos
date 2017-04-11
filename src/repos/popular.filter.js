(function() {
  'use strict';

  angular.module('gh')
    .filter('popular', popular);

    function popular() {

      return function sortByPopularity(repos) {
        if(!Array.isArray(repos)) {
          return repos;
        }

        return repos.sort(function sortRepos(a,b) {
          return b - a;
        });

      };

      function popularity(a, b, c) {
        return a + b*2 + c/2;
      }

    }

}());


//stargazers_count + forks_count * 2  + open_issues_count / 2
