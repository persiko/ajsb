

'use strict';

var myPizzaModule = angular.module('PizzaApp', []);

myPizzaModule.controller('PizzaCtrl', function ($scope) {

    $scope.pizzas = [
        {name: 'Cheese pizza', ingredients: ['Cheese'], price: 10, isSelected: false},
        {name: 'Garlic Pizza', ingredients: ['Fresh garlic', 'italian spice', 'Mozzarella cheese'], price: 11, isSelected: false},
        {name: 'Meat Lovers', ingredients: ['Hamburger', 'Italian sausage', 'crispy bacon', 'ham'], price: 12, isSelected: false},
        {name: 'Manhattan', ingredients: ['Onion', 'bell peppers', 'feta cheese', 'Italian salami'], price: 13, isSelected: false},
        {name: 'Texas Chicken', ingredients: ['Buffalo sauce', 'chicken', 'mozzarella', 'provolone'], price: 13, isSelected: false},
        {name: 'Four Cheeses', ingredients: ['Mozzarella', 'provolone', 'ricotta', 'gorgonzola', 'garlic'], price: 14, isSelected: false}
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
});


