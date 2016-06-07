'use strict';
angular.module('taskListApp')
.config(['$stateProvider',function($stateProvider){
    $stateProvider.state('newLabel',{
        url : '/newLabel',
        templateUrl : '../../views/newLabel-template.html',
        controller : 'newLabelController'
    });
}])
.controller('labelController',
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
}])
.controller('newLabelController',
    ['$scope','$state','$stateParams','dataService',
    function($scope,$state,$stateParams,dataService){
        $scope.name="";
        $scope.color="";
        $scope.setColor=function(value){
            $scope.color=value;
        };
 
        $scope.saveLabel=function(){
 
            var label={
                "name":$scope.name,
                "color":$scope.color
            };
 
            dataService.addNewLabel(label);
 
            dataService.setSelectedLabel($scope.name);
            $state.transitionTo('showTasks',$stateParams,{reload:true});
 
        };
    }])
;