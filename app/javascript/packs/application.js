/* eslint no-console:0 */
import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import AppComponent from './app.component'

const app = angular.module('BuchaBuddy', [uirouter])
.component('appComponent', AppComponent)
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      component: 'appComponent'
    })

  $urlRouterProvider.otherwise('/')
}])

export default app;
