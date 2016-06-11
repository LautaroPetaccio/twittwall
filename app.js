var twittsApp = angular.module('twittsApp', []);

twittsApp.controller('TwittsController', function ($scope) {

  $scope.hashtag = "";

  $scope.socket;

  $scope.twitts = [];

  $scope.receiveTwitt = function(data) {
    $scope.twitts.unshift(data);
    $scope.$apply();
  }

  $scope.serverDisconnected = function() {
    console.log("Server disconnected");
  }

  $scope.hashtagOnKeyUp = function(event) {
    if(event.keyCode == 13) {
      $scope.setHashtag($scope.hashtag);
      $scope.twitts = [];
    }
  }

  $scope.setHashtag = function(hashtag) {
    $scope.socket.emit('search_hashtag', hashtag);
  }

  $scope.connect = function() {
    $scope.socket = io.connect('http://localhost:8000');
    $scope.socket.on('new_twitt', this.receiveTwitt);
    $scope.socket.on('disconnect', this.serverDisconnected);
  }

  $scope.connect();
  
});