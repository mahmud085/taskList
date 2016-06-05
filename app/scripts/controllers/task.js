var module=angular.module('taskListApp');

module.controller('taskListController',function($scope,dataService){
    dataService.loadTaskData()
        .then(function(data){
            $scope.data1 = dataService.getAllTasks();
        },function(error){
            consol.log(error);
        });

});
