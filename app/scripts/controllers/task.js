'use strict';
var module=angular.module('taskListApp');

module.config(['$stateProvider',function($stateProvider){
	$stateProvider.state('showTasks',{
		url : '/taskList',
		templateUrl : '../../views/taskList-template.html',
		controller : 'taskListController'
	});
}]);
module.controller('taskListController',['$scope','dataService',
	function($scope,dataService){

	$scope.label=dataService.getSelectedLabel();
        if($scope.label=="All Pending"){
        $scope.tasks=dataService.getTaskByCompletionStatus(false);
    }else if($scope.label=="All Tasks"){
        $scope.tasks=dataService.getAllTasks();
    }
    else {
        $scope.tasks=dataService.getTasksForLabel($scope.label);
    }

}]);
