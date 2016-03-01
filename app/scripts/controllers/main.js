'use strict';


angular.module('yeomanPracticeApp')
  .controller('MainCtrl', function($scope) {
    $scope.items = ['item 1', 'item 2', 'item 3'];
    $scope.addItem = function(){
    	$scope.items.push($scope.item); //adds new item to list - this has to be
    	$scope.item = ''; //resets the 'item' input to blank
    	//come back to this with error messaging/not submitting empty stuff
    };
    $scope.removeItem = function(index){
    	$scope.items.splice(index, 1); //must be items - not item.
    };
  });
