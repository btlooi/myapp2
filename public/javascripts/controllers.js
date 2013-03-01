'use strict';

/* Controllers */

IndexCtrl.$inject = [ '$scope', '$http', '$location'];

function IndexCtrl($scope, $http, $location) {
  $http.get('/api/posts').
    success(function(data, status, headers, config) {
      $scope.posts = data.posts;
    });

  $scope.vcontrolbtn = function(flag){
      if(flag)
         this.vcontrol = "/partials/vcontrol";
      else
         this.vcontrol = "";
  }  
  $scope.items = ['x1', 'x2', 'x3'];
  $scope.room = 'x1' ; 
}


function AddPostCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.submitPost = function () {
    $http.post('/api/post', $scope.form).
      success(function(data) {
        $location.path('/');
      });
  };
}


function AddVideoCtrl($scope, $http, $location) {

  $scope.webcam = "On webcam";
  $scope.von = false;
  $scope.status = "";
  $scope.join_room = function(params)
  {
    console.log("init");
    console.log(params);
    $scope.status = "joining  room " + params.room;
    join_room(params.room);
  }

  $scope.leave_room = function()
  {
    $scope.status = "webcam on...";
    //stopvideo();
    leave_room();
  }

  $scope.startvideo = function()
  {
    if(!$scope.von)
    {
      $scope.von=true;
      $scope.webcam = "Off webcam";
      $scope.status = "webcam on...";
      startvideo();
    }
    else
    {
      $scope.von=false;
      $scope.webcam = "On webcam";
      $scope.status = "webcam off...";
      stopwebcam();
    }
  }

  $scope.$on('$routeChangeStart', function(scope, next, current){
      //alert("change start");
      stopvideo();
      stopwebcam();
      /*
      console.log("from");
      console.log(current);
      console.log("to");
      console.log(next);
      */
  });
}

function ReadPostCtrl($scope, $http, $location, $routeParams) {
  console.log("read post");
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });
}

function EditPostCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.form = data.post;
    });

  $scope.editPost = function () {
    $http.put('/api/post/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/readPost/' + $routeParams.id);
      });
  };
}

function DeletePostCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });

  $scope.deletePost = function () {
    $http.delete('/api/post/' + $routeParams.id).
      success(function(data) {
        $location.url('/');
      });
  };

  $scope.home = function () {
    $location.url('/');
  };
}

function LogoutCtrl($scope, $http, $location) {
  $location.url('/logout');
}


function WhoIsOnlineCtrl($scope, $http, $location) {
    $http.get('/api/users').
    success(function(data, status, headers, config) {
       $scope.users  = data.users;
    });

}
