'use strict';

angular.module('book', ['ngRoute']).
    config(function ($routeProvider) {

        $routeProvider.when('/Chapter 2/Introducing a Controller', {
                controller: 'PizzaCtrl',
                templateUrl: 'scripts/chapter 2/Example 3_search.html'
            }
        ).when('/Chapter 7/Services', {
                controller: 'ServicesCtrl',
                templateUrl: 'scripts/chapter 7/services/Services.html'
            }
        )
    }
).controller('ChaptersCtrl', function ($scope) {

        $scope.chapters = [
            {name: 'Chapter 1', sections: [1, 2, 3], isSelected: true},
            {name: 'Chapter 2', sections: ['Introducing a Controller', 'Example 2', 'Example 3'], isSelected: true},
            {name: 'Chapter 3', sections: [1, 2, 3], isSelected: true},
            {name: 'Chapter 4', sections: [1, 2, 3], isSelected: true},
            {name: 'Chapter 5', sections: [1, 2, 3], isSelected: true},
            {name: 'Chapter 7', sections: ['Services', 'Factories', 'Providers'], isSelected: true}
        ];

        $scope.chapter = $scope.chapters[0];
        $scope.sections = $scope.chapter.sections;


        $scope.setSelectedChapter = function (chapter) {
            $scope.chapter = chapter;
            $scope.sections = chapter.sections;
        }
    }
);

