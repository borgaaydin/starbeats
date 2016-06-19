/**
 * Created by borga on 05/06/16.
 */

starbeats.controller('IndexSearchController',
    function IndexSearchController($scope){
        $scope.search = function (searchTerm) {
            if(searchTerm===undefined || searchTerm===null) searchTerm = "" ;
            IndexSearchService.getSearchResults(searchTerm).then(function successCallback(response) {
                $scope.searchResults = response.data;
                console.log($scope.searchResults);
            });
        };
    }
);