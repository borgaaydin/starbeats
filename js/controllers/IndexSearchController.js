/**
 * Created by borga on 05/06/16.
 */

starbeats_index.controller('IndexSearchController',
    function IndexSearchController($scope){
        $scope.selectedNumber = null;

        // instantiate the bloodhound suggestion engine
        var numbers = new Bloodhound({
            datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.num); },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: [
                { num: 'one' },
                { num: 'two' },
                { num: 'three' },
                { num: 'four' },
                { num: 'five' },
                { num: 'six' },
                { num: 'seven' },
                { num: 'eight' },
                { num: 'nine' },
                { num: 'ten' }
            ]
        });

        // initialize the bloodhound suggestion engine
        numbers.initialize();

        $scope.numbersDataset = {
            displayKey: 'num',
            source: numbers.ttAdapter()
        };


        // Typeahead options object
        $scope.exampleOptions = {
            highlight: false,
            hint: false
        };

        var events = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: [
                "Underclub",
                "Fiesta",
                "Loco",
                "Under",
                "Yolo",
                "Sam Paganini",
            ]
        });

        var artists = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: [
                "Sam Paganini",
                "John Doe",
                "Sam Doe",
                "John Paganini"
            ]
        });

        events.initialize();
        artists.initialize();

        $scope.multipleDataset = [
            {
                name: 'events',
                source: events.ttAdapter(),
                templates: {
                    header: '<h3 class="search-category-name">EVENTS</h3>'
                }
            },
            {
                name: 'artists',
                source: artists.ttAdapter(),
                templates: {
                    header: '<h3 class="search-category-name">ARTISTS</h3>'
                }
            }];

        $scope.search = function (searchTerm) {
            if(searchTerm===undefined || searchTerm===null) searchTerm = "" ;
            IndexSearchService.getSearchResults(searchTerm).then(function successCallback(response) {
                $scope.searchResults = response.data;
                console.log($scope.searchResults);
            });
        };
    }
);