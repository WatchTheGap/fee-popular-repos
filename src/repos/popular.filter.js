(function() {
  'use strict';

  angular.module('gh')
    .filter('popular', popular);

    function popular() {

      return function sortByPopularity(repo) {
        if(!Array.isArray(repo)) {
          return repo;
        }

        let repoCopy = [].concat(repo);

        return repoCopy.sort(function sortRepos(a,b) {
          let aPop = a.stargazers_count + a.forks_count * 2 + a.open_issues_count / 2;
          let bPop = b.stargazers_count + b.forks_count * 2 + b.open_issues_count / 2;

          return bPop - aPop;
        });
      };

    }

}());


//stargazers_count + forks_count * 2  + open_issues_count / 2
