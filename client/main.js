import angular from 'angular';
import angularMeteor from 'angular-meteor';
import attendeesList from '../imports/components/attendeesList/attendeesList';
 
angular.module('simple-attendees', [
  angularMeteor,
  attendeesList.name
]);