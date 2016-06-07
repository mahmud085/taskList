'use strict';
var module = angular.module('taskListApp');
module.service('dataService',function($http,$q){
    var selectedLabel = "";
    var arrLabels = [];
    var arrAllTasks = [];

    this.loadTaskData = function(){
    	var defer = $q.defer();
    	$http.get('../../data/data.json')
    		.success(function(data){
    			defer.$$resolve(data);
    			arrLabels = data.labels;
    			arrAllTasks = data.tasks;
    		})
    		.error(function(err){
    			defer.reject("Error!");
    			console.log("Error "+err);
    		})
    	return defer.promise;
    };
    this.getAllLabels=function(){
        return arrLabels;
    };
    this.getAllTasks=function(){
        return arrAllTasks;
    };
    this.getTasksForLabel = function(label){
    	var tasks = [];
    	angular.forEach(arrAllTasks,function(obj,key){
    		if(obj.labelName === label){
    			tasks.push(obj);
    		}
    	});

    	return tasks;
    };
    this.getTaskByCompletionStatus = function(status){
    	var tasks = [];
    		angular.forEach(arrAllTasks,function(task,key){
    			if(task.completed === status){
    				tasks.push(task);
    			}
    		});
    	return tasks;
    };
    this.setSelectedLabel = function(label){
        selectedLabel = label;
    };
    this.getSelectedLabel = function(){
        if(selectedLabel=="") {
            selectedLabel = "Inbox";
        }
        return selectedLabel;
    };
    this.addNewLabel=function(label){
        arrLabels.push(label);
    };
    this.addNewTask=function(tasks){
        arrAllTasks.push(tasks);
    };
    this.updateTask=function(updatedTask){
        angular.forEach(arrAllTasks, function(task, key) {
            if(task.id===updatedTask.id){
                arrAllTasks[key]=updatedTask;
            }
        });
    };

    this.deleteTask=function(deletedTask){
        angular.forEach(arrAllTasks, function(task, key) {
            if(task.id===deletedTask.id){
                arrAllTasks.splice(key,1);
            }
        });
    };
});