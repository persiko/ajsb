'use strict';

var myPizzaModule = angular.module('PizzaApp', []);

myPizzaModule.controller('PizzaCtrl', function ($scope) {

    $scope.pizzas = [
        {name: 'Cheese pizza', ingredients: ['Cheese'], price: 10, isSelected: false},
        {name: 'Garlic Pizza', ingredients: ['Fresh garlic', 'italian spice', 'Mozzarella cheese'], price: 11, isSelected: false},
        {name: 'Meat Lovers', ingredients: ['Hamburger', 'pepperoni', 'Italian sausage', 'crispy bacon', 'ham'], price: 12, isSelected: false},
        {name: 'Supreme', ingredients: ['Italian sausage', 'mushrooms', 'onion', 'bell peppers', 'black olives', 'ham', 'pepperoni'], price: 12, isSelected: false},
        {name: 'Manhattan', ingredients: ['Onion', 'bell peppers', 'green olives', 'feta cheese', 'Italian salami'], price: 13, isSelected: false},
        {name: 'Garden', ingredients: ['Fresh portobello mushrooms', 'red onion', 'black olive', 'bell peppers'], price: 13, isSelected: false},
        {name: 'BBQ Chicken', ingredients: ['Grilled chicken', 'red onion', 'mozzarella', 'provolone'], price: 13, isSelected: false},
        {name: 'Texas Chicken', ingredients: ['Buffalo sauce', 'grilled chicken', 'red onion', 'mozzarella', 'provolone'], price: 13, isSelected: false},
        {name: 'Steak Pizza', ingredients: ['Beef steak', 'Italian spice', 'bell pepper', 'red onion', 'white sauce', 'mozzarella'], price: 13, isSelected: false},
        {name: 'Capri Pizza', ingredients: ['Broccoli', 'spinach', 'green olives', 'green pepper', 'basil', 'mozzarella', 'cheddar'], price: 14, isSelected: false},
        {name: 'Four Cheeses', ingredients: ['Mozzarella', 'provolone', 'ricotta', 'gorgonzola', 'fresh basil', 'garlic'], price: 14, isSelected: false}
    ];

    $scope.sum = function () {

        var s = 0;

        angular.forEach($scope.pizzas, function (pizza) {

            if (pizza.isSelected) {
                s += pizza.price;
            }

        });

        return s;

    };

    $scope.getMatchingClass = function(pizza) {

        if($scope.search && $scope.search.query.length == 0){
            return 'normal';
        }

        if($scope.search && pizza.ingredients.join().toString().indexOf($scope.search.query) != -1) {
            return 'matching'
        } else {
            return 'notmatching';
        }

    }

});


