angular.module('hospitalApp', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardController'
    })
    .when('/doctors', {
      templateUrl: 'views/doctor.html',
      controller: 'DoctorController'
    })
    .when('/patients', {
      templateUrl: 'views/patient.html',
      controller: 'PatientController'
    })
    .when('/appointments', {
      templateUrl: 'views/appointment.html',
      controller: 'AppointmentController'
    })
    .otherwise({ redirectTo: '/' });
});
