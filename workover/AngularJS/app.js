// cria o modulo
angular.module("helloWorld", []);
  // localiza o modulo
angular.module("helloWorld")
  .controller("helloWorldCtrl", function ($scope) {
    $scope.message = "Hello World";
  });
