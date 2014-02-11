angular.module('Test', [])
    .service('mulService', function () {
        return this.value = 8;
    })
    .factory('mulFactory', function () {

        return {value: 18};

    })
    .provider('mulProvider', function () {

        this.message = "What!";

        this.$get = function () {
            return this.message;
        };

        this.setMessage = function(m) {
            this.message = m;
        };

    })
    .controller('ServiceCtrl',function ($scope, mulService, mulFactory, mulProvider) {

        $scope.serviceValue = mulService;
        $scope.factoryValue = mulFactory;
        $scope.providerValue = mulProvider;

    }).config(function (mulProviderProvider) {
        mulProviderProvider.setMessage("WTF!");

    });


