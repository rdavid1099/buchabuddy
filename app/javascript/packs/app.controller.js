class AppController {
  constructor($http, $scope) {
    'ngInject';
    this.$http = $http;
    this.$scope = $scope;
  }

  $onInit = () => {
    this.test = "Hello World"
    this.$scope.testing = "Goodbye Moon!!!"
  }

}

export default AppController;
