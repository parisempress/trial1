import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './attendeesList.html';
 
class AttendeesListCtrl {
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
}
 
export default angular.module('attendeesList', [
  angularMeteor
])
  .component('attendeesList', {
    templateUrl: 'imports/components/attendeesList/attendeesList.html',
    controller: AttendeesListCtrl
  });