var socket = io.connection("localhost");
function table3Ctrl($scope){
    $scope.users = [
        {name: "Moroni", age: 0},
        {name: "Enos", age: 0}
    ];

    socket.on('ngTableSocket', function (data) {
      console.log(data);
        $scope.users = data;
        $scope.$apply();
        console.log($scope.users[0]);
    });
}
