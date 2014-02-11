angular.module('book').service('SimpleService',function () {

    return 'Hello'

}).controller('ServiceExampleCtrl', function ($scope, SimpleService) {

        $scope.outcome = SimpleService();

    }
);