'use strict';
var module=angular.module('taskListApp');

module.controller('labelController',
     ['$scope','dataService','$state','$stateParams',
    function($scope,dataService,$state,$stateParams){
    
    dataService.loadTaskData()
    .then(function(data){
            $scope.data = dataService.getAllLabels();
        },function(error){
            console.log(error);
        });

    $scope.getTasksLengthForLabel=function(label){
        return dataService.getTasksForLabel(label).length;
    };

    $scope.getPendingTasksLength=function(){
        return dataService.getTaskByCompletionStatus(false).length;
    };

    $scope.getAllTasksLength=function(){
        return dataService.getAllTasks().length;
    };
    $scope.setLabel=function(label){
        console.log("inside label","Label = ",label);
        dataService.setSelectedLabel(label);
        $state.transitionTo('showTasks',$stateParams,{reload:true});
    };
}]);