angular.module('hospitalApp').controller('AppointmentController', function($scope, $http) {
  $scope.appointments = [];
  $scope.doctors = [];
  $scope.patients = [];
  $scope.newAppointment = {};

  function loadAll() {
    $http.get('/api/appointments').then(res => $scope.appointments = res.data);
    $http.get('/api/doctors').then(res => $scope.doctors = res.data);
    $http.get('/api/patients').then(res => $scope.patients = res.data);
  }

  $scope.addAppointment = function() {
    $http.post('/api/appointments', $scope.newAppointment).then(() => {
      $scope.newAppointment = {};
      loadAll();
    });
  };

  $scope.deleteAppointment = function(id) {
    $http.delete('/api/appointments/' + id).then(loadAll);
  };

  loadAll();
});
