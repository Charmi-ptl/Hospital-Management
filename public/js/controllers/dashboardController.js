angular.module('hospitalApp').controller('DashboardController', function($scope, $http) {
  $scope.totalDoctors = 0;
  $scope.totalPatients = 0;
  $scope.totalAppointments = 0;

  $http.get('/api/doctors').then(res => $scope.totalDoctors = res.data.length);
  $http.get('/api/patients').then(res => $scope.totalPatients = res.data.length);
  $http.get('/api/appointments').then(res => $scope.totalAppointments = res.data.length);
});
