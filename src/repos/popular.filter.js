(function() {
  'use strict';

  angular.module('gh')
    .filter('popular', popular);

    function popular() {

      function popularity(repo) {
        return repo.stargazers_count + repo.forks_count * 2 + repo.open_issues_count / 2;
      }

      function sortByPopularity(repos) {
        if(!Array.isArray(repos)) {
          return repos;
        }

        repos.sort(function sortRepos(a,b) {
          return b - a;
        });

      }

    }

}());


//stargazers_count + forks_count * 2  + open_issues_count / 2
