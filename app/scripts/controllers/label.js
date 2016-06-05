var module=angular.module('taskListApp');

module.controller('labelController',function($scope,dataService){
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

});